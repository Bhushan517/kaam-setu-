import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0a0f' },
  appBar: { paddingHorizontal: 20, paddingTop: Platform.OS === 'ios' ? 56 : 40, paddingBottom: 16, backgroundColor: '#0a0a0f' },
  webContainerAppBar: { width: '100%', maxWidth: 480, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  appBarLeft: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 36, height: 36, borderRadius: 18, marginRight: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  appBarTitle: { color: '#ffffff', fontSize: 18, fontWeight: '800' },
  appBarTitleSecondary: { color: '#00d2ff' },
  bellIcon: { padding: 4 },
  
  scroll: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 120, alignItems: 'center' },
  webContainer: { width: '100%', maxWidth: 480 },
  
  pageTitle: { color: '#ffffff', fontSize: 32, fontWeight: '800', marginBottom: 6 },
  subtitleRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 32 },
  greenPulse: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#00e676', marginRight: 8, shadowColor: '#00e676', shadowOpacity: 0.8, shadowRadius: 6, shadowOffset: { width: 0, height: 0 }, elevation: 4 },
  pageSubtitle: { color: '#8b91a8', fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  
  card: { backgroundColor: '#17171a', borderRadius: 28, padding: 24, marginBottom: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)' },
  avatarSection: { position: 'relative', width: 68, height: 68, marginBottom: 16 },
  cardAvatar: { width: 68, height: 68, borderRadius: 34, backgroundColor: '#2a2a2e' },
  ratingPill: { position: 'absolute', bottom: -2, right: -6, backgroundColor: '#000000', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 6, paddingVertical: 3, borderRadius: 12, borderWidth: 1, borderColor: '#333' },
  ratingText: { color: '#ffffff', fontSize: 10, fontWeight: '800', marginLeft: 3 },
  
  nameRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 },
  cardName: { color: '#ffffff', fontSize: 20, fontWeight: '800', flex: 1 },
  statusCol: { alignItems: 'flex-end', justifyContent: 'center' },
  statusUrgentText: { color: '#00e676', fontSize: 10, fontWeight: '800', letterSpacing: 1, marginBottom: 4 },
  timeUrgentText: { color: '#00e676', fontSize: 13, fontWeight: '800' },
  statusActiveText: { color: '#8b91a8', fontSize: 10, fontWeight: '800', letterSpacing: 1, marginBottom: 4 },
  timeActiveText: { color: '#ffffff', fontSize: 13, fontWeight: '800' },
  
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  infoText: { color: '#a0a8c0', fontSize: 13, fontWeight: '500', marginLeft: 6 },
  
  actionRow: { flexDirection: 'row', height: 52 },
  btnAccept: { flex: 1, borderRadius: 26, alignItems: 'center', justifyContent: 'center' },
  btnAcceptText: { color: '#0d0d14', fontSize: 15, fontWeight: '800' },
  btnReject: { width: 110, backgroundColor: '#232329', borderRadius: 26, alignItems: 'center', justifyContent: 'center' },
  btnRejectText: { color: '#a0a8c0', fontSize: 15, fontWeight: '700' },
  
  scanningBox: { height: 160, borderRadius: 32, borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.05)', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0a0f', marginTop: 10, marginBottom: 30 },
  scanningText: { color: '#6b7280', fontSize: 13, textAlign: 'center', lineHeight: 20, marginTop: 16, marginBottom: 12, fontWeight: '500' },
  dotsRow: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#6b7280', marginHorizontal: 3 },
  
  fabContainer: { position: 'absolute', bottom: Platform.OS === 'ios' ? 100 : 90, left: 0, right: 0, alignItems: 'center' },
  fabWrapper: { width: '100%', maxWidth: 480, alignItems: 'flex-end', paddingRight: 20 },
  fabMap: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#1d1d26', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 8 },
  fabBadge: { position: 'absolute', top: 12, right: 14, width: 8, height: 8, borderRadius: 4, backgroundColor: '#00e676', borderWidth: 1.5, borderColor: '#1d1d26' },
});
