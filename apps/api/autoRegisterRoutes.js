import path from 'path';
import fs from 'fs/promises';
import { pathToFileURL } from 'url';

export async function autoRegisterRoutes(fastify, routesDir = './routes') {
  const basePath = path.resolve(routesDir);

  async function processDir(dir, prefix = '') {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const routeName = entry.name.replace(/\.js$/, '');
      const routePrefix = `${prefix}/${routeName}`.replace(/\/+/g, '/');

      if (entry.isDirectory()) {
        await processDir(fullPath, routePrefix);
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        const routeModule = await import(pathToFileURL(fullPath));
        fastify.log.info(`Registering route: ${routePrefix}`);

        fastify.register(routeModule.default, {
          prefix: routePrefix === '/index' ? '/' : routePrefix,
        });
      }
    }
  }

  await processDir(basePath);
}
