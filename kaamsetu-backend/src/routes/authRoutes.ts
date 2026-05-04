import { FastifyInstance } from 'fastify';
import { handleSendOtp, handleVerifyOtp, handleUpdateProfile } from '../services/authService';

export default async function authRoutes(fastify: FastifyInstance) {
  // Routes
  fastify.post('/auth/send-otp', handleSendOtp);
  fastify.post('/auth/verify-otp', handleVerifyOtp);
  fastify.post('/auth/update-profile', handleUpdateProfile);
}
