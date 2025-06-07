import Fastify from 'fastify';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { autoRegisterRoutes } from './autoRegisterRoutes.js';

dotenv.config();

const fastify = Fastify({ logger: true });

// Build proper mongoUrl
const mongoUrl = process.env.MONGODB_URI.endsWith('/')
  ? `${process.env.MONGODB_URI}${process.env.MONGODB_NAME}`
  : `${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`;

try {
  await mongoose.connect(mongoUrl);
  fastify.log.info(`MongoDB connected to ${mongoUrl}`);
} catch (err) {
  fastify.log.error('MongoDB connection error:', err);
  process.exit(1);
}

// Auto-register routes
await autoRegisterRoutes(fastify, './routes');

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3001, host: '0.0.0.0' });
    fastify.log.info(`Server listening on port ${process.env.PORT || 3001}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
