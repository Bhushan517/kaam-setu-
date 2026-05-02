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
import { styles } from './NotificationsScreenStyles';

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
