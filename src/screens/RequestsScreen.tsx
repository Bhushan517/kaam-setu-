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
import { styles } from './RequestsScreenStyles';

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
