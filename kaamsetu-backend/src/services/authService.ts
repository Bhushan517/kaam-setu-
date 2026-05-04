import { FastifyRequest, FastifyReply } from 'fastify';
import { pool } from '../db/connection';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

// In memory OTP store (use Redis in production)
const otpStore: Record<string, string> = {};

export const handleSendOtp = async (req: FastifyRequest, reply: FastifyReply) => {
  const { phone } = req.body as { phone: string };

  if (!phone || phone.length < 10) {
    return reply.status(400).send({ success: false, message: 'Invalid phone number' });
  }

  // Generate a fake 6-digit OTP for testing
  const otp = '123456'; 
  otpStore[phone] = otp;

  console.log(`[AUTH] Sent OTP ${otp} to ${phone}`);

  return reply.send({ success: true, message: 'OTP sent successfully', otp }); // returning OTP for testing purposes
};

export const handleVerifyOtp = async (req: FastifyRequest, reply: FastifyReply) => {
  const { phone, otp } = req.body as { phone: string, otp: string };

  if (otpStore[phone] !== otp) {
    return reply.status(400).send({ success: false, message: 'Invalid or expired OTP' });
  }

  // Clear OTP
  delete otpStore[phone];

  try {
    // Check if user exists
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM users WHERE phone = ?', [phone]);

    if (rows.length > 0) {
      // User exists
      const user = rows[0];
      return reply.send({ success: true, message: 'Login successful', user, isNew: false });
    } else {
      // Create new user
      const [result] = await pool.query<ResultSetHeader>('INSERT INTO users (phone) VALUES (?)', [phone]);
      const newUser = { id: result.insertId, phone, role: null };
      return reply.send({ success: true, message: 'Registered successfully', user: newUser, isNew: true });
    }
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ success: false, message: 'Database error' });
  }
};

export const handleUpdateProfile = async (req: FastifyRequest, reply: FastifyReply) => {
  const { userId, role, name } = req.body as { userId: number, role: string, name: string };

  try {
    await pool.query('UPDATE users SET role = ?, name = ? WHERE id = ?', [role, name, userId]);
    return reply.send({ success: true, message: 'Profile updated successfully' });
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ success: false, message: 'Failed to update user' });
  }
};
