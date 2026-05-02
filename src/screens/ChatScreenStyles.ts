import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0a0f' },
  
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    paddingTop: Platform.OS === 'ios' ? 56 : 40, 
    paddingBottom: 16, 
    backgroundColor: '#0a0a0f',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.03)'
  },
  backBtn: { padding: 4, marginRight: 8 },
  headerProfile: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  avatarWrapper: { position: 'relative' },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#2a2a2e' },
  onlineDot: { position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, borderRadius: 5, backgroundColor: '#00e676', borderWidth: 2, borderColor: '#0a0a0f' },
  headerTextCol: { marginLeft: 12 },
  nameText: { color: '#ffffff', fontSize: 16, fontWeight: '800' },
  roleText: { color: '#00d2ff', fontSize: 10, fontWeight: '800', letterSpacing: 0.5, marginTop: 2 },
  
  callBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  
  scroll: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 24 },
  
  dateLabelWrapper: { alignItems: 'center', marginBottom: 24 },
  dateLabel: { backgroundColor: '#131317', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  dateText: { color: '#a0a8c0', fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  
  msgLeftWrapper: { marginBottom: 24, alignItems: 'flex-start', maxWidth: '85%' },
  msgLeft: { backgroundColor: '#1c1c1f', padding: 16, borderTopLeftRadius: 24, borderTopRightRadius: 24, borderBottomRightRadius: 24, borderBottomLeftRadius: 4 },
  msgText: { color: '#ffffff', fontSize: 14, lineHeight: 22 },
  timeTextLeft: { color: '#6b7280', fontSize: 10, marginTop: 8, marginLeft: 4, fontWeight: '500' },
  msgImage: { width: 240, height: 160, borderRadius: 16, marginTop: 12 },
  
  msgRightWrapper: { marginBottom: 24, alignItems: 'flex-end', alignSelf: 'flex-end', maxWidth: '85%' },
  msgRight: { backgroundColor: '#281d3d', borderWidth: 1, borderColor: '#372d4d', padding: 16, borderTopLeftRadius: 24, borderTopRightRadius: 24, borderBottomLeftRadius: 24, borderBottomRightRadius: 4 },
  timeRightRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8, marginRight: 4 },
  timeTextRight: { color: '#6b7280', fontSize: 10, fontWeight: '500' },
  
  systemPillWrapper: { alignItems: 'center', marginVertical: 12 },
  systemPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#121a15', borderWidth: 1, borderColor: '#192b21', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  systemText: { color: '#8b91a8', fontSize: 11, marginLeft: 6, fontWeight: '500' },
  
  quickReplyContainer: { paddingBottom: 16 },
  quickReplyScroll: { paddingHorizontal: 20, alignItems: 'center' },
  quickReplyBtn: { backgroundColor: '#1d1d21', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, marginRight: 12 },
  quickReplyText: { color: '#d1d5db', fontSize: 13, fontWeight: '500' },
  
  inputBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#0a0a0f', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.03)' },
  plusBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1f', borderRadius: 20, marginRight: 12 },
  inputWrapper: { flex: 1, backgroundColor: '#000000', borderRadius: 24, height: 48, justifyContent: 'center', paddingHorizontal: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  textInput: { color: '#ffffff', fontSize: 15 },
  sendBtn: { width: 48, height: 48, alignItems: 'center', justifyContent: 'center', marginLeft: 8 },
  sendBtnCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#b070ff', alignItems: 'center', justifyContent: 'center' },
});
