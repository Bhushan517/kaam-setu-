import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0a0f' },
  
  appBar: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    paddingTop: Platform.OS === 'ios' ? 56 : 40, 
    paddingBottom: 16, 
    backgroundColor: '#0a0a0f',
  },
  backBtn: { padding: 4 },
  appBarCenter: { flex: 1, alignItems: 'center' },
  appBarTitle: { color: '#ffffff', fontSize: 18, fontWeight: '800' },
  appBarTitleSecondary: { color: '#00d2ff' },
  headerAvatar: { width: 32, height: 32, borderRadius: 16, borderWidth: 1, borderColor: '#333' },

  scroll: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 40, alignItems: 'center' },

  workerCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#121215', 
    width: '100%', 
    maxWidth: 480, 
    borderRadius: 32, 
    padding: 16, 
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.03)'
  },
  workerAvatarWrapper: { position: 'relative' },
  workerAvatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#2a2a2e' },
  onlineDot: { position: 'absolute', bottom: 4, right: 0, width: 14, height: 14, borderRadius: 7, backgroundColor: '#a4ff66', borderWidth: 2, borderColor: '#121215' },
  workerInfo: { marginLeft: 16, flex: 1 },
  serviceCompletedLabel: { color: '#8b91a8', fontSize: 10, fontWeight: '800', letterSpacing: 1, marginBottom: 4 },
  workerName: { color: '#ffffff', fontSize: 18, fontWeight: '800', marginBottom: 2 },
  workerRole: { color: '#00d2ff', fontSize: 13, fontWeight: '600' },

  feedbackContainer: {
    backgroundColor: '#1d1d21',
    width: '100%',
    maxWidth: 480,
    borderRadius: 40,
    padding: 24,
    paddingTop: 32,
    alignItems: 'center',
    marginBottom: 32,
  },
  titleText: { color: '#ffffff', fontSize: 26, fontWeight: '800', textAlign: 'center', lineHeight: 32, marginBottom: 8 },
  subtitleText: { color: '#8b91a8', fontSize: 13, fontWeight: '500', textAlign: 'center', marginBottom: 32 },

  starsRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10, marginBottom: 40 },
  starGlow: {
    shadowColor: '#d4a5ff',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },

  sectionLabel: { color: '#ffffff', fontSize: 11, fontWeight: '800', letterSpacing: 1.5, alignSelf: 'flex-start', marginBottom: 16 },
  
  vibesRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 32 },
  vibeItem: { width: 56, height: 72, alignItems: 'center', justifyContent: 'center', borderRadius: 16 },
  vibeItemActive: { backgroundColor: 'rgba(0, 210, 255, 0.08)', borderWidth: 1, borderColor: '#00d2ff' },
  vibeText: { color: '#4b5563', fontSize: 10, fontWeight: '800', marginTop: 8 },
  vibeTextActive: { color: '#00d2ff' },

  inputWrapper: { width: '100%', backgroundColor: '#000000', borderRadius: 16, height: 120, padding: 16, marginBottom: 24 },
  textInput: { flex: 1, color: '#ffffff', fontSize: 15 },

  submitBtnWrapper: { width: '100%' },
  btnGradient: { height: 56, borderRadius: 28, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  btnGradientText: { color: '#0d0d14', fontSize: 16, fontWeight: '800' },

  skipBtn: { marginBottom: 16 },
  skipText: { color: '#a0a8c0', fontSize: 14, fontWeight: '600' },

  secureRow: { flexDirection: 'row', alignItems: 'center' },
  secureText: { color: '#4b5563', fontSize: 10, fontWeight: '800', letterSpacing: 1, marginLeft: 6 },
});
