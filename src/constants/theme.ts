export const Colors = {
  // Backgrounds
  bg: '#0d0d14',
  bgCard: '#13131f',
  bgInput: '#1a1d2e',
  bgMuted: '#1e2035',

  // Brand
  primary: '#9b59d0',
  primaryLight: '#a78bfa',
  accent: '#5bc8f5',
  accentDark: '#2196f3',

  // Text
  textPrimary: '#ffffff',
  textSecondary: '#a0a8c0',
  textMuted: '#6b7280',
  textDisabled: '#4a5070',

  // Status
  success: '#00e676',
  error: '#ff4d4f',
  warning: '#facc15',

  // Borders
  border: '#2a2d40',
  borderLight: '#1e2035',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 22,
  full: 9999,
} as const;

export const FontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  base: 15,
  lg: 17,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  display: 36,
} as const;

export const GradientColors = {
  button: ['#7b5ea7', '#9b59d0', '#5bc8f5'] as const,
  logo: ['#7ecfff', '#2196f3', '#1a1aff'] as const,
  hero: ['#0f0c29', '#302b63', '#24243e'] as const,
};
