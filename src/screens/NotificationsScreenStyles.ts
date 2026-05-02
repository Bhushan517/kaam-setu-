import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0a0f' },
  appBar: { paddingHorizontal: 20, paddingTop: Platform.OS === 'ios' ? 56 : 40, paddingBottom: 16, backgroundColor: '#0a0a0f' },
  webContainerAppBar: { width: '100%', maxWidth: 480, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  appBarLeft: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 36, height: 36, borderRadius: 18, marginRight: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  appBarTitle: { color: '#d4a5ff', fontSize: 18, fontWeight: '800' },
  appBarTitleSecondary: { color: '#00d2ff' },
  bellIcon: { padding: 4 },
  
  scroll: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 60, alignItems: 'center' },
  webContainer: { width: '100%', maxWidth: 480 },
  
  pageTitle: { color: '#ffffff', fontSize: 36, fontWeight: '900', marginBottom: 20, letterSpacing: -0.5 },
  
  tabsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 28 },
  tabButton: { height: 36, paddingHorizontal: 20, borderRadius: 18, backgroundColor: '#13131c', alignItems: 'center', justifyContent: 'center', marginRight: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  tabButtonActive: { backgroundColor: '#1a1625', borderColor: '#4a3a6b' },
  tabText: { color: '#8b91a8', fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  tabTextActive: { color: '#d4a5ff' },
  
  card: { backgroundColor: '#131318', borderRadius: 28, padding: 20, marginBottom: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)' },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  iconBox: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  cardTitleCol: { flex: 1 },
  cardTitle: { color: '#ffffff', fontSize: 17, fontWeight: '700' },
  cardTimeCol: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', minWidth: 70 },
  timeText: { color: '#6b7280', fontSize: 10, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase' },
  unreadDot: { width: 6, height: 6, borderRadius: 3, marginLeft: 6 },
  
  cardBody: { paddingLeft: 60, paddingBottom: 4 },
  description: { color: '#a0a8c0', fontSize: 14, lineHeight: 22, fontWeight: '500' },
  
  actionBtnPrimary: { marginTop: 16, alignSelf: 'flex-start', overflow: 'hidden', borderRadius: 20 },
  actionBtnGradient: { paddingHorizontal: 24, height: 40, alignItems: 'center', justifyContent: 'center' },
  actionBtnText: { color: '#0d0d14', fontSize: 13, fontWeight: '800', letterSpacing: 0.5 },
});
