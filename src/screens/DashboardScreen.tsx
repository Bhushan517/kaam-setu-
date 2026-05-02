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
import { styles } from './DashboardScreenStyles';

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
          <TouchableOpacity style={styles.bellIcon} onPress={() => navigation.navigate('Notifications')}>
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
