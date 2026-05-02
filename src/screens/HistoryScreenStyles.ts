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
  
  pageTitle: { color: '#ffffff', fontSize: 32, fontWeight: '800', marginBottom: 24, alignSelf: 'flex-start' },
  
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  summaryCard: { flex: 1, backgroundColor: '#131317', borderRadius: 24, padding: 20, marginHorizontal: 4, alignItems: 'center', justifyContent: 'center' },
  summaryLabel: { color: '#8b91a8', fontSize: 10, fontWeight: '800', letterSpacing: 1, marginBottom: 8 },
  summaryValue: { fontSize: 24, fontWeight: '800' },
  
  tabsContainer: { flexDirection: 'row', backgroundColor: '#000000', borderRadius: 24, padding: 4, marginBottom: 32, borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)' },
  tabItem: { flex: 1, height: 44, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  tabItemActive: { backgroundColor: '#261c31' },
  tabText: { color: '#a0a8c0', fontSize: 13, fontWeight: '700' },
  tabTextActive: { color: '#d4a5ff', fontSize: 13, fontWeight: '800' },

  timelineContainer: { position: 'relative', marginTop: 10 },
  timelineLine: { position: 'absolute', left: 15, top: 15, bottom: 0, width: 1, backgroundColor: '#2a2a2e' },
  timelineItem: { flexDirection: 'row', marginBottom: 32 },
  timelineIconWrapper: { width: 30, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 2 },
  timelineIconBg: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#0a0a0f', borderWidth: 1.5, alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0 },
  timelineCard: { flex: 1, marginLeft: 24, backgroundColor: '#131316', borderRadius: 24, padding: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)' },
  
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  cardStatus: { fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  cardAmount: { color: '#ffffff', fontSize: 18, fontWeight: '800' },
  cardTitle: { color: '#ffffff', fontSize: 20, fontWeight: '800', marginBottom: 16, lineHeight: 28 },
  
  cardMetaRow: { flexDirection: 'row', alignItems: 'center' },
  metaCol: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
  cardMetaText: { color: '#8b91a8', fontSize: 13, fontWeight: '500', marginLeft: 6 },
  
  cardRatingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  starsWrapper: { flexDirection: 'row', alignItems: 'center' },

  btnDark: { backgroundColor: '#232329', borderRadius: 24, height: 48, alignItems: 'center', justifyContent: 'center' },
  btnDarkText: { color: '#ffffff', fontSize: 13, fontWeight: '700' },
  btnGradient: { borderRadius: 24, height: 48, alignItems: 'center', justifyContent: 'center' },
  btnGradientText: { color: '#0d0d14', fontSize: 14, fontWeight: '800' },
  
  fabContainer: { position: 'absolute', bottom: Platform.OS === 'ios' ? 100 : 90, left: 0, right: 0, alignItems: 'center' },
  fabWrapper: { width: '100%', maxWidth: 480, alignItems: 'flex-end', paddingRight: 20 },
  fabChat: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#1d1d26', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', shadowColor: '#b070ff', shadowOpacity: 0.2, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 8 },
  fabBadge: { position: 'absolute', top: 12, right: 12, width: 8, height: 8, borderRadius: 4, backgroundColor: '#00e676', borderWidth: 1.5, borderColor: '#1d1d26' },
});
