import Fastify from 'fastify';
import cors from '@fastify/cors';
import formbody from '@fastify/formbody';
import { testConnection } from './db/connection';
import authRoutes from './routes/authRoutes';

const fastify = Fastify({ logger: true });

// Register plugins
fastify.register(cors, { origin: '*' });
fastify.register(formbody);

// Register routes
fastify.register(authRoutes, { prefix: '/api' });

// Health check route
fastify.get('/health', async () => {
  return { status: 'OK', message: 'KaamSetu API is running!' };
});

const start = async () => {
  try {
    await testConnection();

    const PORT = parseInt(process.env.PORT || '5000', 10);
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`🚀 KaamSetu Backend is running on http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
