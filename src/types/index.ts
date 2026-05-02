// ── Navigation param lists ──────────────────────────────────────────────────

export type RootStackParamList = {
  Login: undefined;
  OtpVerify: { phone: string };
  UserSelection: undefined;
  MainTabs: { screen?: string };
  Dashboard: undefined;
  Requests: undefined;
  PostWork: undefined;
  History: undefined;
  Profile: undefined;
};

// ── API ─────────────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface OtpResponse {
  sessionId: string;
  expiresIn: number;
}

// ── Components ──────────────────────────────────────────────────────────────

export interface ButtonProps {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'phone-pad' | 'numeric';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}
