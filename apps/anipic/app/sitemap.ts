// To add support for generating a sitemap in a Next.js application, we can use the `acorn` parser to analyze the JavaScript files in the `app/` directory. This will allow us to identify which pages should be included in the sitemap based on a specific export condition.

// add bellow code to the page which you want to add in sitemap
// metadata.addToSitemap = true;
// export const metadata = { addToSitemap: true };

import { execSync } from "child_process";
import path from "path";
import fs from "fs";
import { MetadataRoute } from "next";
import type * as acorn from "acorn";

let acornParser: typeof acorn.Parser;

const loadAcorn = async () => {
  try {
    const acorn = await import("acorn");
    const acornJSX = await import("acorn-jsx");

    // Enhance acorn parser with JSX support
    acornParser = acorn.Parser.extend(acornJSX.default());
  } catch (err) {
    console.error("Acorn module not available", err);
  }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await loadAcorn();
  if (!acornParser) {
    console.error("Acorn parser is not available. Ensure it is installed.");
    return [];
  }

  const baseUrl = process.env.BASE_URL || "https://tools.anix7.in";
  const pagesFolder = "app"; // your app/ directory

  const getLastModified = (filePath: string) => {
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

  const getAllPages = (base: string) => {
    const files: { route: string; filePath: string }[] = [];

    function walk(dir: string, routeBase = "") {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.isDirectory()) {
          // Recurse into directories (look for pages in subdirectories)
          walk(path.join(dir, entry.name), `${routeBase}/${entry.name}`);
        } else if (entry.isFile() && entry.name === "page.js") {
          const filePath = path.join(dir, entry.name);
          const content = fs.readFileSync(filePath, "utf-8");

          try {
            // Parse the file and check if it addToSitemap : true in metadata
            const ast = acornParser.parse(content, {
              sourceType: "module",
              ecmaVersion: "latest",
            });

            const hasAddToSitemap = ast.body.some((node) => {
              if (node.type !== "ExportNamedDeclaration") return false;

              const decl = node.declaration;
              if (decl && decl.type === "VariableDeclaration") {
                return decl.declarations.some((d) => {
                  if (
                    d.type === "VariableDeclarator" &&
                    d.id.type === "Identifier" &&
                    d.id.name === "metadata" &&
                    d.init?.type === "ObjectExpression"
                  ) {
                    return d.init.properties.some((prop) => {
                      if (
                        prop.type === "Property" &&
                        ((prop.key.type === "Identifier" && prop.key.name === "addToSitemap") ||
                          (prop.key.type === "Literal" && prop.key.value === "addToSitemap")) &&
                        prop.value.type === "Literal" &&
                        prop.value.value === true
                      ) {
                        return true;
                      }
                      return false;
                    });
                  }
                  return false;
                });
              }
              return false;
            });

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
      url: `${normalizedBaseUrl}${(route === "/" ? "" : route.replace(/\(.*?\)/g, "")).replace(
        /^\/+/,
        "/"
      )}`,

      lastModified: getLastModified(filePath),
      // changeFrequency: route === "/" ? "monthly" : "weekly",
      // priority: route === "/" ? 1.0 : 0.8,
    }))
    .sort((a, b) => (a.url === normalizedBaseUrl ? -1 : b.url === normalizedBaseUrl ? 1 : 0));

  // console.log(sitemapEntries);
  return sitemapEntries;
}
