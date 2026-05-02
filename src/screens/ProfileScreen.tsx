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
import { styles } from './ProfileScreenStyles';

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
