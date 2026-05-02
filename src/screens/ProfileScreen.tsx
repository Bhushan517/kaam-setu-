import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }: any): React.JSX.Element {
  return (
    <View style={styles.root}>
      {/* ── Top Header ── */}
      <View style={styles.appBar}>
        <View style={styles.webContainerAppBar}>
          <View style={styles.appBarLeft}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={styles.headerAvatar}
            />
            <Text style={styles.appBarTitle}>
              Kaam<Text style={styles.appBarTitleSecondary}>Setu</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.bellIcon} activeOpacity={0.7} onPress={() => navigation.navigate('Notifications')}>
            <Ionicons name="notifications" size={22} color="#d4a5ff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.webContainer}>
          
          {/* ── Avatar Section ── */}
          <View style={styles.avatarSection}>
            <View style={styles.avatarGlowContainer}>
              {/* Fake gradient glow behind avatar */}
              <View style={styles.avatarGlow1} />
              <View style={styles.avatarGlow2} />
              
              <View style={styles.avatarWrapper}>
                <Image 
                  source={{ uri: 'https://randomuser.me/api/portraits/men/44.jpg' }} 
                  style={styles.mainAvatar} 
                />
                <View style={styles.verifyBadge}>
                  <MaterialCommunityIcons name="check-decagram" size={14} color="#000" />
                </View>
              </View>
            </View>

            <Text style={styles.name}>Arjun Sharma</Text>
            <Text style={styles.phone}>+91 98765 43210</Text>
            
            <View style={styles.kycPill}>
              <View style={styles.kycDot} />
              <Text style={styles.kycText}>KYC VERIFIED</Text>
            </View>
          </View>

          {/* ── Stats Section ── */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>TOTAL JOBS DONE</Text>
              <Text style={[styles.statValue, { color: '#d4a5ff' }]}>142</Text>
              <View style={styles.statSubRow}>
                <Ionicons name="trending-up" size={12} color="#00e676" />
                <Text style={[styles.statSubText, { color: '#00e676', marginLeft: 4 }]}>+12 this month</Text>
              </View>
              <MaterialCommunityIcons name="clipboard-check-multiple-outline" size={36} color="rgba(255,255,255,0.03)" style={styles.statBgIcon} />
            </View>
            
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>TOTAL EARNINGS</Text>
              <Text style={[styles.statValue, { color: '#00d2ff' }]}>₹48,250</Text>
              <Text style={styles.statSubtitleGrey}>Withdrawal ready</Text>
              <Ionicons name="wallet-outline" size={40} color="rgba(255,255,255,0.03)" style={styles.statBgIcon} />
            </View>
          </View>

          {/* ── Account Settings ── */}
          <Text style={styles.sectionTitle}>ACCOUNT SETTINGS</Text>
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <View style={[styles.menuIconBox, { backgroundColor: 'rgba(176, 112, 255, 0.15)' }]}>
                <MaterialCommunityIcons name="account-edit" size={18} color="#b070ff" />
              </View>
              <View style={styles.menuTextCol}>
                <Text style={styles.menuTitle}>Edit Profile</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#6b7280" />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <View style={[styles.menuIconBox, { backgroundColor: 'rgba(0, 210, 255, 0.15)' }]}>
                <Ionicons name="globe-outline" size={18} color="#00d2ff" />
              </View>
              <View style={styles.menuTextCol}>
                <Text style={styles.menuTitle}>Language Switch</Text>
                <Text style={styles.menuSubTitle}>Currently: English</Text>
              </View>
              <MaterialCommunityIcons name="translate" size={20} color="#a0a8c0" />
            </TouchableOpacity>
          </View>

          {/* ── Preferences ── */}
          <Text style={styles.sectionTitle}>PREFERENCES</Text>
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <View style={[styles.menuIconBox, { backgroundColor: 'rgba(76, 175, 80, 0.15)' }]}>
                <Ionicons name="card" size={18} color="#4caf50" />
              </View>
              <View style={styles.menuTextCol}>
                <Text style={styles.menuTitle}>Wallet & Payments</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#6b7280" />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <View style={[styles.menuIconBox, { backgroundColor: 'rgba(196, 196, 196, 0.15)' }]}>
                <Ionicons name="settings-sharp" size={18} color="#c4c4c4" />
              </View>
              <View style={styles.menuTextCol}>
                <Text style={styles.menuTitle}>App Settings</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {/* ── Logout Button ── */}
          <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.7}>
            <MaterialCommunityIcons name="logout" size={20} color="#ff5252" />
            <Text style={styles.logoutText}>LOGOUT</Text>
          </TouchableOpacity>

          {/* ── Footer ── */}
          <Text style={styles.footerText}>KAAMSETU V2.4.0 • BUILT FOR BHARATA</Text>
          
          <View style={{ height: 80 }} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0a0f' },
  appBar: { paddingHorizontal: 20, paddingTop: Platform.OS === 'ios' ? 56 : 40, paddingBottom: 16, backgroundColor: '#0a0a0f' },
  webContainerAppBar: { width: '100%', maxWidth: 480, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  appBarLeft: { flexDirection: 'row', alignItems: 'center' },
  headerAvatar: { width: 36, height: 36, borderRadius: 18, marginRight: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  appBarTitle: { color: '#d4a5ff', fontSize: 18, fontWeight: '800' },
  appBarTitleSecondary: { color: '#00d2ff' },
  bellIcon: { padding: 4 },
  
  scroll: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 40, alignItems: 'center' },
  webContainer: { width: '100%', maxWidth: 480 },
  
  /* Avatar Section */
  avatarSection: { alignItems: 'center', marginBottom: 36, marginTop: 10 },
  avatarGlowContainer: { position: 'relative', width: 120, height: 120, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  avatarWrapper: { position: 'relative', zIndex: 3, width: 104, height: 104, borderRadius: 52, padding: 4, backgroundColor: '#13131c', shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.8, shadowRadius: 10, elevation: 10 },
  mainAvatar: { width: '100%', height: '100%', borderRadius: 50 },
  avatarGlow1: { position: 'absolute', top: 5, zIndex: 1, width: 110, height: 110, borderRadius: 55, backgroundColor: '#00d2ff', opacity: 0.2, transform: [{ scale: 1.1 }] },
  avatarGlow2: { position: 'absolute', top: 10, zIndex: 2, width: 90, height: 90, borderRadius: 45, backgroundColor: '#b070ff', opacity: 0.15, transform: [{ scale: 1.3 }] },
  
  verifyBadge: { position: 'absolute', bottom: 0, right: 0, width: 26, height: 26, borderRadius: 13, backgroundColor: '#00e676', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#13131c' },
  
  name: { color: '#ffffff', fontSize: 26, fontWeight: '800', marginBottom: 4 },
  phone: { color: '#a0a8c0', fontSize: 13, fontWeight: '500', marginBottom: 12 },
  
  kycPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0d1f14', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, borderWidth: 1, borderColor: '#005934' },
  kycDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#00e676', marginRight: 6 },
  kycText: { color: '#00e676', fontSize: 10, fontWeight: '800', letterSpacing: 0.5 },
  
  /* Stats Row */
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 },
  statCard: { flex: 1, backgroundColor: '#131316', borderRadius: 28, padding: 20, marginHorizontal: 4, borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)', position: 'relative', overflow: 'hidden' },
  statLabel: { color: '#8b91a8', fontSize: 10, fontWeight: '800', letterSpacing: 1.5, marginBottom: 8 },
  statValue: { fontSize: 28, fontWeight: '800', marginBottom: 6 },
  statSubRow: { flexDirection: 'row', alignItems: 'center' },
  statSubText: { fontSize: 11, fontWeight: '700' },
  statSubtitleGrey: { color: '#8b91a8', fontSize: 11, fontWeight: '500' },
  statBgIcon: { position: 'absolute', right: 15, top: 20 },
  
  /* Menus */
  sectionTitle: { color: '#6b7280', fontSize: 11, fontWeight: '800', letterSpacing: 1.5, marginBottom: 12, marginLeft: 8 },
  menuCard: { backgroundColor: '#131316', borderRadius: 28, paddingHorizontal: 20, marginBottom: 28, borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)' },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 20 },
  menuIconBox: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  menuTextCol: { flex: 1 },
  menuTitle: { color: '#ffffff', fontSize: 15, fontWeight: '700', marginBottom: 2 },
  menuSubTitle: { color: '#8b91a8', fontSize: 12, fontWeight: '500' },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.04)', marginLeft: 60 },
  
  /* Logout */
  logoutBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 56, borderRadius: 28, borderWidth: 1, borderColor: 'rgba(255, 82, 82, 0.3)', marginBottom: 32, backgroundColor: 'rgba(255, 82, 82, 0.05)' },
  logoutText: { color: '#ff5252', fontSize: 13, fontWeight: '800', letterSpacing: 1.5, marginLeft: 8 },
  
  /* Footer */
  footerText: { color: '#3a3a44', fontSize: 10, fontWeight: '700', letterSpacing: 1, textAlign: 'center' },
});
