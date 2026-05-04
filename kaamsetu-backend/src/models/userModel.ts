export interface User {
  id?: number;
  phone: string;
  name: string | null;
  role: 'CUSTOMER' | 'PROVIDER' | null;
  is_verified: boolean;
  created_at?: Date;
}
