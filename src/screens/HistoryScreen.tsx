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
import { styles } from './HistoryScreenStyles';

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
