import fp from 'fastify-plugin';

async function rootRoutes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { message: 'Hello from Fastify API' };
  });
}

export default fp(rootRoutes);
