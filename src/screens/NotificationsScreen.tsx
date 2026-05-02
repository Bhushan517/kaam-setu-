import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function NotificationsScreen({ navigation }: any): React.JSX.Element {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <View style={styles.root}>
      {/* ── Top Header ── */}
      <View style={styles.appBar}>
        <View style={styles.webContainerAppBar}>
          <TouchableOpacity style={styles.appBarLeft} onPress={() => navigation.goBack()}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={styles.avatar}
            />
            <Text style={styles.appBarTitle}>
              Kaam<Text style={styles.appBarTitleSecondary}>Setu</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bellIcon} activeOpacity={0.7}>
            <Ionicons name="notifications" size={22} color="#b070ff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.webContainer}>
          
          <Text style={styles.pageTitle}>Updates</Text>

          {/* ── Tabs ── */}
          <View style={styles.tabsRow}>
            {['ALL', 'JOBS', 'SYSTEM'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* ── Notifications List ── */}

          {/* Card 1: Job Offer */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(176, 112, 255, 0.1)' }]}>
                <Ionicons name="briefcase" size={20} color="#d4a5ff" />
              </View>
              <View style={styles.cardTitleCol}>
                <Text style={styles.cardTitle}>Job Offer Received</Text>
              </View>
              <View style={styles.cardTimeCol}>
                <Text style={[styles.timeText, { color: '#d4a5ff' }]}>JUST NOW</Text>
                <View style={[styles.unreadDot, { backgroundColor: '#00d2ff' }]} />
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.description}>
                GreenSpace Landscaping has sent you a request for the 'Vertical Garden' project.
              </Text>
              <TouchableOpacity style={styles.actionBtnPrimary} activeOpacity={0.8}>
                <LinearGradient
                  colors={['#8b5cf6', '#00d2ff']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.actionBtnGradient}
                >
                  <Text style={styles.actionBtnText}>Review Request</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          {/* Card 2: Payment */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(0, 230, 118, 0.1)' }]}>
                <Ionicons name="checkmark-circle" size={20} color="#00e676" />
              </View>
              <View style={styles.cardTitleCol}>
                <Text style={styles.cardTitle}>Payment Released</Text>
              </View>
              <View style={styles.cardTimeCol}>
                <Text style={styles.timeText}>2H AGO</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.description}>
                ₹4,500 for 'Urban Plumbing Service' has been credited to your KaamSetu wallet.
              </Text>
            </View>
          </View>

          {/* Card 3: System / Verified */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(0, 210, 255, 0.1)' }]}>
                <Ionicons name="shield-checkmark" size={20} color="#00d2ff" />
              </View>
              <View style={styles.cardTitleCol}>
                <Text style={styles.cardTitle}>Account Verified</Text>
              </View>
              <View style={styles.cardTimeCol}>
                <Text style={styles.timeText}>YESTERDAY</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.description}>
                Your professional certification has been successfully verified. You now have the 'Verified Provider' badge.
              </Text>
            </View>
          </View>

          {/* Card 4: Declined */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(255, 82, 82, 0.1)' }]}>
                <Ionicons name="close-circle" size={20} color="#ff5252" />
              </View>
              <View style={styles.cardTitleCol}>
                <Text style={styles.cardTitle}>Request Declined</Text>
              </View>
              <View style={styles.cardTimeCol}>
                <Text style={[styles.timeText, { color: '#ff5252', fontWeight: '800' }]}>NEW</Text>
                <View style={[styles.unreadDot, { backgroundColor: '#ff5252' }]} />
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.description}>
                Aashiana Interiors declined your quote for 'Interior Paint'. Keep exploring other opportunities!
              </Text>
            </View>
          </View>

          {/* Card 5: Review */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(255, 255, 255, 0.05)' }]}>
                <MaterialCommunityIcons name="history" size={20} color="#8b91a8" />
              </View>
              <View style={styles.cardTitleCol}>
                <Text style={styles.cardTitle}>Review Reminder</Text>
              </View>
              <View style={styles.cardTimeCol}>
                <Text style={styles.timeText}>3 DAYS AGO</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.description}>
                Don't forget to rate your experience with 'Royal Catering Services' to help the community.
              </Text>
            </View>
          </View>

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
