import { execSync } from "child_process";
import path from "path";
import fs from "fs";

let acornParser;
try {
  // Only import acorn and acorn-jsx on the server side
  const acorn = require("acorn");
  const acornJSX = require("acorn-jsx");

  // Enhance acorn parser with JSX support
  acornParser = acorn.Parser.extend(acornJSX());
} catch (err) {
  console.error("Acorn module not available", err);
}

export default async function sitemap() {
  if (!acornParser) {
    console.error("Acorn parser is not available. Ensure it is installed.");
    return [];
  }

  const baseUrl = process.env.BASE_URL || "https://tools.anix7.in";
  const pagesFolder = "app"; // your app/ directory

  const getLastModified = (filePath) => {
    try {
      const stdout = execSync(`git log -1 --format="%cI" -- "${filePath}"`, {
        encoding: "utf-8",
      }).trim();

      const date = new Date(stdout);
      if (isNaN(date.getTime())) {
        console.warn(`Warning: Invalid last modified date for ${filePath}`);
        return new Date();
      }

      return date;
    } catch (error) {
      console.error(`Failed to get git commit time for ${filePath}`, error);
      return new Date();
    }
  };

  const getAllPages = (base) => {
    const files = [];

    function walk(dir, routeBase = "") {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.isDirectory()) {
          // Recurse into directories (look for pages in subdirectories)
          walk(path.join(dir, entry.name), `${routeBase}/${entry.name}`);
        } else if (entry.isFile() && entry.name === "page.js") {
          const filePath = path.join(dir, entry.name);
          const content = fs.readFileSync(filePath, "utf-8");

          try {
            // Parse the file and check if it exports addToSitemap = true
            const ast = acornParser.parse(content, {
              sourceType: "module",
              ecmaVersion: "latest",
            });

            const hasAddToSitemap = ast.body.some(
              (node) =>
                node.type === "ExportNamedDeclaration" &&
                node.declaration &&
                node.declaration.declarations &&
                node.declaration.declarations.some(
                  (decl) =>
                    decl.id.name === "addToSitemap" && decl.init.value === true
                )
            );

            if (hasAddToSitemap) {
              files.push({
                route: routeBase === "" ? "/" : routeBase,
                filePath,
              });
            }
          } catch (err) {
            console.error(`Error parsing file ${filePath}:`, err);
          }
        }
      }
    }

    walk(base);
    return files;
  };

  // Scan the entire `app/` directory
  const pages = getAllPages(path.join(pagesFolder));

  // Normalize baseUrl to avoid trailing slashes issues
  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");

  // Map pages into sitemap entries
  const sitemapEntries = pages
  .map(({ route, filePath }) => ({
    url: `${normalizedBaseUrl}${(route === "/" ? "" : route.replace(/\(.*?\)/g, "")).replace(/^\/+/, "/")}`,

    lastModified: getLastModified(filePath),
    changeFrequency: route === "/" ? "monthly" : "weekly",
    priority: route === "/" ? 1.0 : 0.8,
  }))
  .sort((a, b) =>
    a.url === normalizedBaseUrl ? -1 : b.url === normalizedBaseUrl ? 1 : 0
  );


  // console.log(sitemapEntries);
  return sitemapEntries;
}