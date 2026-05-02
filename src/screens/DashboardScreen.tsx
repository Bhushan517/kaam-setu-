import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>; // Replace 'Home' with 'Dashboard' in navigation later

export default function DashboardScreen({ navigation }: any): React.JSX.Element {
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
            <View>
              <Text style={styles.locationText}>New Delhi, IN</Text>
              <Text style={styles.appBarTitle}>
                Kaam<Text style={styles.appBarTitleSecondary}>Setu</Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bellIcon}>
            <Ionicons name="notifications" size={22} color="#b070ff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.webContainer}>
          
          {/* ── Greeting ── */}
          <Text style={styles.greetingTitle}>Hello Bhava 👋</Text>
          <Text style={styles.greetingSub}>What work do you need help with today?</Text>

          {/* ── Quick Action Banner ── */}
          <TouchableOpacity activeOpacity={0.9} style={styles.bannerWrapper} onPress={() => navigation.navigate('PostWork')}>
            <LinearGradient
              colors={['#a28cff', '#53d7ff', '#00e1ff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.banner}
            >
              <View>
                <Text style={styles.bannerOverline}>QUICK ACTION</Text>
                <Text style={styles.bannerTitle}>+ Post{'\n'}Kaam</Text>
              </View>
              <View style={styles.bannerIconCircle}>
                <Ionicons name="flash" size={28} color="#000" />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* ── Categories ── */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoriesGrid}>
            {[
              { id: 1, type: 'DOMESTIC', label: 'Home Help', icon: 'home-variant', color: '#b070ff', bgColor: 'rgba(176, 112, 255, 0.15)' },
              { id: 2, type: 'LOGISTICS', label: 'Shifting', icon: 'truck', color: '#00d2ff', bgColor: 'rgba(0, 210, 255, 0.15)' },
              { id: 3, type: 'RURAL', label: 'Farming', icon: 'tractor', color: '#4caf50', bgColor: 'rgba(76, 175, 80, 0.15)' },
              { id: 4, type: 'LABOR', label: 'Daily Work', icon: 'hammer-wrench', color: '#c4c4c4', bgColor: 'rgba(196, 196, 196, 0.15)' },
            ].map((cat) => (
              <TouchableOpacity key={cat.id} style={styles.categoryCard} activeOpacity={0.8}>
                <View style={[styles.catIconWrapper, { backgroundColor: cat.bgColor }]}>
                  <MaterialCommunityIcons name={cat.icon as any} size={24} color={cat.color} />
                </View>
                <Text style={styles.catType}>{cat.type}</Text>
                <Text style={styles.catLabel}>{cat.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* ── Nearby Workers ── */}
          <View style={[styles.sectionHeader, { marginTop: 24 }]}>
            <Text style={styles.sectionTitle}>Nearby Workers</Text>
            <View style={styles.onlineBadge}>
              <View style={styles.onlineDot} />
              <Text style={styles.onlineText}>24 Online</Text>
            </View>
          </View>

          {[
            { id: 1, name: 'Rajesh Kumar', role: 'Expert Electrician', dist: '1.2 km away', rating: '4.8', img: 'https://randomuser.me/api/portraits/men/44.jpg' },
            { id: 2, name: 'Priya Sharma', role: 'Home Cleaning', dist: '0.8 km away', rating: '4.9', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
          ].map((worker) => (
            <TouchableOpacity key={worker.id} style={styles.workerCard} activeOpacity={0.85}>
              <View style={styles.workerAvatarWrapper}>
                <Image source={{ uri: worker.img }} style={styles.workerAvatar} />
                <View style={styles.workerOnlineDot} />
              </View>
              
              <View style={styles.workerInfo}>
                <View style={styles.workerNameRow}>
                  <Text style={styles.workerName}>{worker.name}</Text>
                  <View style={styles.ratingBadge}>
                    <Ionicons name="star" size={10} color="#00e676" />
                    <Text style={styles.ratingText}>{worker.rating}</Text>
                  </View>
                </View>
                <Text style={styles.workerRole}>{worker.role} • {worker.dist}</Text>
              </View>
            </TouchableOpacity>
          ))}

          {/* Extra spacing for Bottom FAB */}
          <View style={{ height: 60 }} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0a0f' },
  appBar: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 56 : 40,
    paddingBottom: 16,
    backgroundColor: '#0a0a0f',
  },
  webContainerAppBar: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appBarLeft: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 44, height: 44, borderRadius: 22, marginRight: 12 },
  locationText: { color: '#8b91a8', fontSize: 11, fontWeight: '700', letterSpacing: 0.5, marginBottom: 2 },
  appBarTitle: { color: '#d4a5ff', fontSize: 18, fontWeight: '800' },
  appBarTitleSecondary: { color: '#00d2ff' },
  bellIcon: { padding: 4 },
  scroll: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 100, alignItems: 'center' },
  webContainer: { width: '100%', maxWidth: 480 },
  greetingTitle: { color: '#ffffff', fontSize: 28, fontWeight: '800', marginBottom: 6 },
  greetingSub: { color: '#a0a8c0', fontSize: 14, marginBottom: 24 },
  bannerWrapper: { borderRadius: 28, overflow: 'hidden', marginBottom: 32 },
  banner: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 28, paddingVertical: 32 },
  bannerOverline: { color: '#13131c', fontSize: 11, fontWeight: '800', letterSpacing: 2, marginBottom: 8 },
  bannerTitle: { color: '#000000', fontSize: 32, fontWeight: '900', lineHeight: 36 },
  bannerIconCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(255,255,255,0.3)', alignItems: 'center', justifyContent: 'center' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { color: '#ffffff', fontSize: 18, fontWeight: '700' },
  viewAll: { color: '#00d2ff', fontSize: 13, fontWeight: '700' },
  onlineBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#13131c', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  onlineDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#00e676', marginRight: 6 },
  onlineText: { color: '#8b91a8', fontSize: 11, fontWeight: '600' },
  categoriesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  categoryCard: { width: '48%', backgroundColor: '#13131c', borderRadius: 24, padding: 20, marginBottom: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)' },
  catIconWrapper: { width: 48, height: 48, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  catType: { color: '#8b91a8', fontSize: 10, fontWeight: '800', letterSpacing: 1.5, marginBottom: 4 },
  catLabel: { color: '#ffffff', fontSize: 15, fontWeight: '700' },
  workerCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#13131c', borderRadius: 24, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)' },
  workerAvatarWrapper: { position: 'relative', marginRight: 16 },
  workerAvatar: { width: 60, height: 60, borderRadius: 30 },
  workerOnlineDot: { position: 'absolute', bottom: 2, right: 2, width: 12, height: 12, borderRadius: 6, backgroundColor: '#00e676', borderWidth: 2, borderColor: '#13131c' },
  workerInfo: { flex: 1 },
  workerNameRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  workerName: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
  ratingBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 230, 118, 0.1)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 8 },
  ratingText: { color: '#ffffff', fontSize: 11, fontWeight: '700', marginLeft: 4 },
  workerRole: { color: '#8b91a8', fontSize: 13, fontWeight: '500' },
});
