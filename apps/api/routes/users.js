import fp from 'fastify-plugin';
import User from '../../../shared/models/User.js';

async function userRoutes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    const users = await User.find();
    return users;
  });

  fastify.post('/', async (request, reply) => {
    const { name, email } = request.body;
    const user = new User({ name, email });
    await user.save();
    return user;
  });
}

export default fp(userRoutes);
