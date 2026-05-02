import { StyleSheet } from 'react-native';
import { Colors, Spacing, BorderRadius, FontSize } from '../constants/theme';

const BOX_SIZE = 50;

export const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bg },
  hiddenInput: { position: 'absolute', width: 1, height: 1, opacity: 0 },
  container: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: 60, alignItems: 'center' },
  webContainer: { width: '100%', maxWidth: 480 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.bgCard, alignItems: 'center', justifyContent: 'center', marginBottom: Spacing.xl },
  header: { alignItems: 'center', marginBottom: 40 },
  iconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.bgCard, alignItems: 'center', justifyContent: 'center', marginBottom: Spacing.md, borderWidth: 1, borderColor: Colors.border },
  title: { fontSize: FontSize.xxxl, fontWeight: '800', color: Colors.textPrimary, marginBottom: Spacing.sm },
  subtitle: { fontSize: FontSize.md, color: Colors.textSecondary, textAlign: 'center', lineHeight: 22 },
  phoneHighlight: { color: Colors.accent, fontWeight: '700' },
  otpRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 },
  otpBox: { width: BOX_SIZE, height: BOX_SIZE + 10, borderRadius: BorderRadius.sm, backgroundColor: Colors.bgInput, borderWidth: 1.5, borderColor: Colors.border, alignItems: 'center', justifyContent: 'center' },
  otpBoxFilled: { borderColor: Colors.textSecondary, backgroundColor: Colors.bgInput },
  otpBoxActive: { borderColor: Colors.accent, backgroundColor: 'rgba(91,200,245,0.08)' },
  otpInput: { fontSize: FontSize.xxl, fontWeight: '700', color: Colors.textPrimary },
  resendRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  resendText: { color: Colors.textSecondary, fontSize: FontSize.md },
  resendTimer: { color: Colors.textMuted, fontSize: FontSize.md },
  resendLink: { color: Colors.accent, fontSize: FontSize.md, fontWeight: '700' },
});
