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
import { useTranslation } from 'react-i18next';
import { RootStackParamList } from '../types';
import { Colors, Spacing, BorderRadius, FontSize } from '../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './UserSelectionScreenStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'UserSelection'>;

const { width } = Dimensions.get('window');

export default function UserSelectionScreen({ navigation }: Props): React.JSX.Element {
  const { t } = useTranslation();

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
          <Text style={styles.overline}>{t('roles.overline')}</Text>
          <Text style={styles.title}>{t('roles.title')}</Text>
          <Text style={styles.subtitle}>
            {t('roles.subtitle')}
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

          <Text style={styles.cardTitle}>{t('roles.customerTitle')}</Text>
          <Text style={styles.cardDesc}>
            {t('roles.customerDesc')}
          </Text>

          <View style={styles.actionRow}>
            <Text style={styles.actionTextPurple}>{t('roles.selectCustomer')}</Text>
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

          <Text style={styles.cardTitle}>{t('roles.providerTitle')}</Text>
          <Text style={styles.cardDesc}>
            {t('roles.providerDesc')}
          </Text>

          <View style={styles.actionRow}>
            <Text style={styles.actionTextCyan}>{t('roles.selectProvider')}</Text>
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
            {t('roles.agreeText')}{' '}
            <Text style={styles.footerLinkPurple}>{t('roles.termsOfService')}</Text>
            {' '}{t('roles.and')}{' '}
            <Text style={styles.footerLinkPurple}>{t('roles.privacyPolicy')}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
