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
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

export default function HistoryScreen({ navigation }: any): React.JSX.Element {
  return (
    <View style={styles.root}>
      {/* ── Top Header ── */}
      <View style={styles.appBar}>
        <View style={styles.webContainerAppBar}>
          <View style={styles.appBarLeft}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={styles.avatar}
            />
            <Text style={styles.appBarTitle}>
              Kaam<Text style={styles.appBarTitleSecondary}>Setu</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.bellIcon} activeOpacity={0.7} onPress={() => navigation.navigate('Notifications')}>
            <Ionicons name="notifications" size={22} color="#8b91a8" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.webContainer}>
          
          <Text style={styles.pageTitle}>Work History</Text>
          
          {/* ── Summary Row ── */}
          <View style={styles.summaryRow}>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryLabel}>TOTAL EARNINGS</Text>
              <Text style={[styles.summaryValue, { color: '#00e676' }]}>₹42,850</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryLabel}>COMPLETED</Text>
              <Text style={[styles.summaryValue, { color: '#00d2ff' }]}>124 Jobs</Text>
            </View>
          </View>

          {/* ── Tabs ── */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity style={styles.tabItem} activeOpacity={0.8}>
              <Text style={styles.tabText}>Ongoing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabItem, styles.tabItemActive]} activeOpacity={0.8}>
              <Text style={styles.tabTextActive}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} activeOpacity={0.8}>
              <Text style={styles.tabText}>Cancelled</Text>
            </TouchableOpacity>
          </View>

          {/* ── Timeline ── */}
          <View style={styles.timelineContainer}>
            {/* The absolute vertical line for the timeline */}
            <View style={styles.timelineLine} />

            {/* Item 1: Complete */}
            <View style={styles.timelineItem}>
              <View style={styles.timelineIconWrapper}>
                <View style={[styles.timelineIconBg, { borderColor: '#005934' }]}>
                  <Ionicons name="checkmark" size={14} color="#00e676" />
                </View>
              </View>
              <View style={styles.timelineCard}>
                <View style={styles.cardHeader}>
                  <Text style={[styles.cardStatus, { color: '#00e676' }]}>COMPLETED</Text>
                  <Text style={styles.cardAmount}>₹2,499</Text>
                </View>
                <Text style={styles.cardTitle}>Deep Home Cleaning</Text>
                <View style={[styles.cardMetaRow, { marginBottom: 16 }]}>
                  <View style={styles.metaCol}>
                    <Ionicons name="calendar-outline" size={14} color="#8b91a8" />
                    <Text style={styles.cardMetaText}>24 Oct 2023</Text>
                  </View>
                  <View style={styles.metaCol}>
                    <Ionicons name="person" size={14} color="#8b91a8" />
                    <Text style={styles.cardMetaText}>Aman Sharma</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.btnDark} activeOpacity={0.8} onPress={() => navigation.navigate('Rating')}>
                  <Text style={styles.btnDarkText}>Rate Service</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Item 2: Active */}
            <View style={styles.timelineItem}>
              <View style={styles.timelineIconWrapper}>
                <View style={[styles.timelineIconBg, { borderColor: '#005b73' }]}>
                  <Ionicons name="flash" size={12} color="#00d2ff" />
                </View>
              </View>
              <View style={styles.timelineCard}>
                <View style={styles.cardHeader}>
                  <Text style={[styles.cardStatus, { color: '#00d2ff' }]}>ACTIVE</Text>
                  <Text style={styles.cardAmount}>₹850</Text>
                </View>
                <Text style={styles.cardTitle}>AC Servicing & Repair</Text>
                <View style={[styles.cardMetaRow, { marginBottom: 16 }]}>
                  <View style={[styles.metaCol, { width: '50%' }]}>
                    <Ionicons name="calendar-outline" size={14} color="#8b91a8" />
                    <Text style={[styles.cardMetaText, { flexShrink: 1 }]}>Today, 10:30 AM</Text>
                  </View>
                  <View style={[styles.metaCol, { width: '50%' }]}>
                    <Ionicons name="location" size={14} color="#8b91a8" />
                    <Text style={[styles.cardMetaText, { flexShrink: 1 }]}>South Ex II, Delhi</Text>
                  </View>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#a066ff', '#00d2ff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.btnGradient}
                  >
                    <Text style={styles.btnGradientText}>Track Provider</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>

            {/* Item 3: History */}
            <View style={styles.timelineItem}>
              <View style={styles.timelineIconWrapper}>
                <View style={[styles.timelineIconBg, { borderColor: '#333333' }]}>
                  <Ionicons name="time" size={14} color="#8b91a8" />
                </View>
              </View>
              <View style={styles.timelineCard}>
                <View style={styles.cardHeader}>
                  <Text style={[styles.cardStatus, { color: '#8b91a8' }]}>2 WEEKS AGO</Text>
                  <Text style={styles.cardAmount}>₹1,200</Text>
                </View>
                <Text style={styles.cardTitle}>Plumbing Emergency</Text>
                <View style={styles.cardMetaRow}>
                  <View style={styles.metaCol}>
                    <Ionicons name="calendar-outline" size={14} color="#8b91a8" />
                    <Text style={styles.cardMetaText}>12 Oct 2023</Text>
                  </View>
                </View>
                <View style={styles.cardRatingRow}>
                  <View style={styles.starsWrapper}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Ionicons key={i} name="star" size={10} color="#00e676" style={{ marginRight: 2 }} />
                    ))}
                  </View>
                  <Text style={styles.cardMetaText}>Rated 5.0</Text>
                </View>
              </View>
            </View>

          </View>
        </View>
      </ScrollView>

      {/* ── Floating Chat Button ── */}
      <View style={styles.fabContainer} pointerEvents="box-none">
        <View style={styles.fabWrapper} pointerEvents="box-none">
          <TouchableOpacity style={styles.fabChat} activeOpacity={0.8} onPress={() => navigation.navigate('Chat')}>
            <MaterialCommunityIcons name="face-agent" size={24} color="#ffffff" />
            <View style={styles.fabBadge} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
