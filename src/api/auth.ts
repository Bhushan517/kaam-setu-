import { ApiResponse, OtpResponse, User } from '../types';

const BASE_URL = 'https://api.kaamsetu.in/v1'; // 🔁 Replace with your real API

// ── Send OTP ────────────────────────────────────────────────────────────────
export async function sendOtp(phone: string): Promise<ApiResponse<OtpResponse>> {
  try {
    const res = await fetch(`${BASE_URL}/auth/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, countryCode: '+91' }),
    });
    return await res.json();
  } catch (error) {
    return { success: false, error: 'Network error. Please try again.' };
  }
}

// ── Verify OTP ──────────────────────────────────────────────────────────────
export async function verifyOtp(
  phone: string,
  otp: string,
  sessionId: string
): Promise<ApiResponse<{ token: string; user: User }>> {
  try {
    const res = await fetch(`${BASE_URL}/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, otp, sessionId }),
    });
    return await res.json();
  } catch (error) {
    return { success: false, error: 'Network error. Please try again.' };
  }
}

// ── Get Current User ─────────────────────────────────────────────────────────
export async function getMe(token: string): Promise<ApiResponse<User>> {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
  } catch (error) {
    return { success: false, error: 'Network error. Please try again.' };
  }
}
