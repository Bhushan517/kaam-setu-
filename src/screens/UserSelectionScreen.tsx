import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Colors, Spacing, BorderRadius, FontSize } from '../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './UserSelectionScreenStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'UserSelection'>;

const { width } = Dimensions.get('window');

export default function UserSelectionScreen({ navigation }: Props): React.JSX.Element {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0f" />
      
      {/* ── Top App Bar ── */}
      <View style={styles.appBar}>
        <View style={styles.webContainerAppBar}>
          <View style={styles.appBarLeft}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person" size={24} color="#1b1b24" style={styles.avatarIcon} />
            </View>
            <Text style={styles.appBarTitle}>
              Kaam<Text style={styles.appBarTitleHighlight}>Setu</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.bellBtn}>
            <Ionicons name="notifications" size={22} color="#a085ff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.webContainer}>
          {/* ── Header Section ── */}
        <View style={styles.headerSection}>
          <Text style={styles.overline}>ONBOARDING JOURNEY</Text>
          <Text style={styles.title}>Choose your role</Text>
          <Text style={styles.subtitle}>
            Select how you want to experience the platform today. You can always switch later.
          </Text>
        </View>

        {/* ── Card 1: Customer ── */}
        <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={() => navigation.navigate('MainTabs')}>
          {/* Subtle background glow */}
          <LinearGradient
            colors={['rgba(162, 89, 255, 0.03)', 'transparent']}
            style={styles.cardGradient}
          />
          
          <View style={styles.iconCirclePurple}>
            <Ionicons name="flash" size={24} color="#d4a5ff" />
          </View>

          <Text style={styles.cardTitle}>I need help</Text>
          <Text style={styles.cardDesc}>
            Browse verified services, book top-rated pros, and get your tasks done instantly.
          </Text>

          <View style={styles.actionRow}>
            <Text style={styles.actionTextPurple}>SELECT CUSTOMER</Text>
            <Ionicons name="arrow-forward" size={18} color="#d4a5ff" />
          </View>

          {/* Watermark Icon */}
          <MaterialCommunityIcons 
            name="human-greeting-variant" 
            size={110} 
            color="rgba(255,255,255,0.02)" 
            style={styles.watermarkIcon} 
          />
        </TouchableOpacity>

        {/* ── Card 2: Provider ── */}
        <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={() => navigation.navigate('MainTabs')}>
          {/* Subtle background glow */}
          <LinearGradient
            colors={['rgba(0, 198, 255, 0.03)', 'transparent']}
            style={styles.cardGradient}
          />

          <View style={styles.iconCircleCyan}>
            <MaterialCommunityIcons name="toolbox" size={24} color="#00d2ff" />
          </View>

          <Text style={styles.cardTitle}>I want work</Text>
          <Text style={styles.cardDesc}>
            Create your professional profile, find nearby gigs, and grow your local business.
          </Text>

          <View style={styles.actionRow}>
            <Text style={styles.actionTextCyan}>SELECT PROVIDER</Text>
            <Ionicons name="arrow-forward" size={18} color="#00d2ff" />
          </View>

          {/* Watermark Icon */}
          <MaterialCommunityIcons 
            name="briefcase" 
            size={100} 
            color="rgba(255,255,255,0.02)" 
            style={styles.watermarkIconBriefcase} 
          />
        </TouchableOpacity>

        </View>
      </ScrollView>

      {/* ── Footer ── */}
      <View style={styles.footer}>
        <View style={styles.webContainer}>
          <Text style={styles.footerText}>
            By continuing, you agree to our{' '}
            <Text style={styles.footerLinkPurple}>Terms of Service</Text>
            {' '}and{' '}
            <Text style={styles.footerLinkPurple}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
