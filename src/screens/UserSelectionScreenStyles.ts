import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0a0a0f', // Very dark background like the design
  },
  appBar: {
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.03)',
    backgroundColor: '#0a0a0f',
  },
  webContainerAppBar: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarIcon: {
    marginTop: 2, // optical alignment
  },
  appBarTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  appBarTitleHighlight: {
    color: '#7ecfff',
  },
  bellBtn: {
    padding: 4,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
    alignItems: 'center',
  },
  webContainer: {
    width: '100%',
    maxWidth: 480,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  overline: {
    color: '#00d2ff',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 16,
  },
  subtitle: {
    color: '#a0a8c0',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#13131c', // Card base color
    borderRadius: 32,
    padding: 28,
    marginBottom: 24,
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  cardGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120, // Fade out half way
  },
  iconCirclePurple: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(162, 89, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(162, 89, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  iconCircleCyan: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 198, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(0, 198, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  cardDesc: {
    color: '#8b91a8',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 28,
    paddingRight: 20, // Leave room for watermark
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionTextPurple: {
    color: '#d4a5ff',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginRight: 8,
  },
  actionTextCyan: {
    color: '#00d2ff',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginRight: 8,
  },
  watermarkIcon: {
    position: 'absolute',
    bottom: -15,
    right: -10,
    transform: [{ rotate: '-10deg' }],
  },
  watermarkIconBriefcase: {
    position: 'absolute',
    bottom: 0,
    right: 15,
  },
  footer: {
    paddingHorizontal: 30,
    paddingBottom: Platform.OS === 'ios' ? 40 : 30,
    paddingTop: 10,
  },
  footerText: {
    color: '#8b91a8',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
  },
  footerLinkPurple: {
    color: '#d4a5ff',
    fontWeight: '500',
  },
});
