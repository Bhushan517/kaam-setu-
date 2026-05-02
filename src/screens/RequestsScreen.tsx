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

export default function RequestsScreen({ navigation }: any): React.JSX.Element {
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
          
          {/* ── Title ── */}
          <Text style={styles.pageTitle}>Live Requests</Text>
          <View style={styles.subtitleRow}>
            <View style={styles.greenPulse} />
            <Text style={styles.pageSubtitle}>4 ACTIVE WORKERS NEARBY</Text>
          </View>

          {/* ── Card 1: Rajesh Kumar (URGENT) ── */}
          <View style={styles.card}>
            {/* Avatar & Rating */}
            <View style={styles.avatarSection}>
               <Image source={{ uri: 'https://randomuser.me/api/portraits/men/44.jpg' }} style={styles.cardAvatar} />
               <View style={styles.ratingPill}>
                 <Ionicons name="star" size={10} color="#00e676" />
                 <Text style={styles.ratingText}>4.9</Text>
               </View>
            </View>
            
            {/* Name & Status */}
            <View style={styles.nameRow}>
               <Text style={styles.cardName}>Rajesh Kumar</Text>
               <View style={styles.statusCol}>
                 <Text style={styles.statusUrgentText}>URGENT</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                   <Ionicons name="time" size={12} color="#00e676" />
                   <Text style={[styles.timeUrgentText, {marginLeft: 4}]}>02:45</Text>
                 </View>
               </View>
            </View>

            {/* Info */}
            <View style={styles.infoRow}>
               <MaterialCommunityIcons name="toolbox" size={15} color="#8b91a8" />
               <Text style={styles.infoText}>Electrician</Text>
               <Ionicons name="location" size={15} color="#00d2ff" style={{marginLeft: 16}} />
               <Text style={styles.infoText}>0.8 km</Text>
            </View>

            {/* Actions */}
            <View style={styles.actionRow}>
               <TouchableOpacity style={{ flex: 1, marginRight: 12 }} activeOpacity={0.8}>
                 <LinearGradient
                   colors={['#8b5cf6', '#00d2ff']}
                   start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                   style={styles.btnAccept}
                 >
                   <Text style={styles.btnAcceptText}>Accept Request</Text>
                 </LinearGradient>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnReject} activeOpacity={0.8}>
                 <Text style={styles.btnRejectText}>Reject</Text>
               </TouchableOpacity>
            </View>
          </View>

          {/* ── Card 2: Amit Sharma (ACTIVE) ── */}
          <View style={styles.card}>
            {/* Avatar & Rating */}
            <View style={styles.avatarSection}>
               <Image source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} style={styles.cardAvatar} />
               <View style={styles.ratingPill}>
                 <Ionicons name="star" size={10} color="#00e676" />
                 <Text style={styles.ratingText}>4.7</Text>
               </View>
            </View>
            
            {/* Name & Status */}
            <View style={styles.nameRow}>
               <Text style={styles.cardName}>Amit Sharma</Text>
               <View style={styles.statusCol}>
                 <Text style={styles.statusActiveText}>ACTIVE</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                   <Ionicons name="time" size={12} color="#8b91a8" />
                   <Text style={[styles.timeActiveText, {marginLeft: 4}]}>05:12</Text>
                 </View>
               </View>
            </View>

            {/* Info */}
            <View style={styles.infoRow}>
               <MaterialCommunityIcons name="roller-shade" size={15} color="#8b91a8" />
               <Text style={styles.infoText}>Wall Painter</Text>
               <Ionicons name="location" size={15} color="#00d2ff" style={{marginLeft: 16}} />
               <Text style={styles.infoText}>1.5 km</Text>
            </View>

            {/* Actions */}
            <View style={styles.actionRow}>
               <TouchableOpacity style={{ flex: 1, marginRight: 12 }} activeOpacity={0.8}>
                 <LinearGradient
                   colors={['#8b5cf6', '#00d2ff']}
                   start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                   style={styles.btnAccept}
                 >
                   <Text style={styles.btnAcceptText}>Accept Request</Text>
                 </LinearGradient>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnReject} activeOpacity={0.8}>
                 <Text style={styles.btnRejectText}>Reject</Text>
               </TouchableOpacity>
            </View>
          </View>

          {/* ── Scanning Section ── */}
           <View style={styles.scanningBox}>
              <MaterialCommunityIcons name="radar" size={32} color="#3a3a44" />
              <Text style={styles.scanningText}>Scanning for more requests in your{"\n"}area...</Text>
              <View style={styles.dotsRow}>
                 <View style={styles.dot} />
                 <View style={[styles.dot, { opacity: 0.6 }]} />
                 <View style={[styles.dot, { opacity: 0.3 }]} />
              </View>
           </View>

        </View>
      </ScrollView>

      {/* ── Floating Map Button ── */}
      <View style={styles.fabContainer} pointerEvents="box-none">
        <View style={styles.fabWrapper} pointerEvents="box-none">
          <TouchableOpacity style={styles.fabMap} activeOpacity={0.8}>
            <MaterialCommunityIcons name="map-legend" size={24} color="#00d2ff" />
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
