import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import Button from '../components/Button';
import Input from '../components/Input';
import { Colors, Spacing, BorderRadius, FontSize, GradientColors } from '../constants/theme';
import { styles } from './LoginScreenStyles';

const { width } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

type Language = { code: string; label: string };

const LANGUAGES: Language[] = [
  { code: 'en', label: 'ENGLISH' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'mr', label: 'मराठी' },
];

export default function LoginScreen({ navigation }: Props): React.JSX.Element {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(LANGUAGES[0]);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const logoScale = useRef(new Animated.Value(0.7)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const contentSlide = useRef(new Animated.Value(40)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;
  const livePulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(logoScale, { toValue: 1, friction: 5, useNativeDriver: true }),
      Animated.timing(logoOpacity, { toValue: 1, duration: 600, useNativeDriver: true }),
    ]).start();

    setTimeout(() => {
      Animated.parallel([
        Animated.timing(contentSlide, { toValue: 0, duration: 500, useNativeDriver: true }),
        Animated.timing(contentOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]).start();
    }, 300);

    Animated.loop(
      Animated.sequence([
        Animated.timing(livePulse, { toValue: 1.2, duration: 700, useNativeDriver: true }),
        Animated.timing(livePulse, { toValue: 1, duration: 700, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const formatPhone = (text: string): string => {
    const digits = text.replace(/\D/g, '').slice(0, 10);
    return digits.length > 5 ? digits.slice(0, 5) + ' ' + digits.slice(5) : digits;
  };

  const handleContinue = () => {
    const raw = phone.replace(/\s/g, '');
    if (raw.length < 10) {
      Alert.alert('Invalid Number', 'Please enter a valid 10-digit mobile number.');
      return;
    }
    setLoading(true);
    // Simulated API call — replace with sendOtp() from api/auth.ts
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('OtpVerify', { phone: raw });
    }, 1500);
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.bg} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.webContainer}>
            {/* ── Top Bar ── */}
            <View style={styles.topBar}>
              <View style={{ flex: 1 }} />
            <View style={styles.langSelector}>
              <TouchableOpacity
                style={styles.langButton}
                onPress={() => setShowLangMenu((v) => !v)}
                activeOpacity={0.8}
              >
                <Ionicons name="language" size={16} color={Colors.textSecondary} style={{ marginRight: 6 }} />
                <Text style={styles.langText}>{selectedLang.label}</Text>
                <Ionicons
                  name={showLangMenu ? 'chevron-up' : 'chevron-down'}
                  size={14}
                  color={Colors.textSecondary}
                  style={{ marginLeft: 4 }}
                />
              </TouchableOpacity>
              {showLangMenu && (
                <View style={styles.langDropdown}>
                  {LANGUAGES.map((lang) => (
                    <TouchableOpacity
                      key={lang.code}
                      style={[styles.langOption, selectedLang.code === lang.code && styles.langOptionActive]}
                      onPress={() => { setSelectedLang(lang); setShowLangMenu(false); }}
                    >
                      <Text style={[styles.langOptionText, selectedLang.code === lang.code && styles.langOptionActive]}>
                        {lang.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>

          {/* ── Logo ── */}
          <Animated.View style={[styles.logoSection, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}>
            <View style={styles.logoOuter}>
              <LinearGradient colors={GradientColors.logo} style={styles.logoGradient} start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }}>
                <Ionicons name="flash" size={34} color="#fff" />
              </LinearGradient>
              <Animated.View style={[styles.liveBadge, { transform: [{ scale: livePulse }] }]}>
                <Text style={styles.liveText}>LIVE</Text>
              </Animated.View>
            </View>
          </Animated.View>

          {/* ── Titles ── */}
          <Animated.View style={[styles.titleSection, { opacity: contentOpacity, transform: [{ translateY: contentSlide }] }]}>
            <Text style={styles.brandName}>KaamSetu</Text>
            <Text style={styles.welcomeEn}>Welcome to KaamSetu</Text>
            <Text style={styles.welcomeMr}>कामसेतू मध्ये आपले स्वागत आहे</Text>
          </Animated.View>

          {/* ── Hero Image ── */}
          <Animated.View style={[styles.heroCard, { opacity: contentOpacity, transform: [{ translateY: contentSlide }] }]}>
            <Image source={require('../../assets/hero.png')} style={styles.heroImage} resizeMode="cover" />
            <LinearGradient colors={['transparent', 'rgba(13,13,20,0.85)']} style={styles.heroOverlay} />
            <Text style={styles.heroBadgeText}>COMMUNITY FIRST</Text>
            <Text style={styles.heroCaption}>Connecting local expertise with modern{'\n'}opportunities, everywhere in Bharat.</Text>
          </Animated.View>

          {/* ── Input Card ── */}
          <Animated.View style={[styles.inputCard, { opacity: contentOpacity, transform: [{ translateY: contentSlide }] }]}>
            <Text style={styles.inputLabel}>MOBILE NUMBER / मोबाईल नंबर</Text>

            <View style={styles.phoneRow}>
              <View style={styles.countryCode}>
                <Text style={styles.countryCodeText}>+91</Text>
              </View>
              <View style={styles.dividerV} />
              <Input
                value={phone}
                onChangeText={(t) => setPhone(formatPhone(t))}
                placeholder="00000 00000"
                keyboardType="phone-pad"
                autoCapitalize="none"
              />
            </View>

            <Button
              label="Continue with OTP"
              onPress={handleContinue}
              loading={loading}
              icon={<Ionicons name="arrow-forward" size={20} color="#fff" />}
            />

            <Text style={styles.otpHint}>मिळवा ओटीपी (OTP) लॉगिन करण्यासाठी</Text>
          </Animated.View>

          {/* ── Trust & Safety ── */}
          <Animated.View style={[styles.trustSection, { opacity: contentOpacity }]}>
            <View style={styles.trustDivider}>
              <View style={styles.trustLine} />
              <Text style={styles.trustLabel}>TRUST & SAFETY</Text>
              <View style={styles.trustLine} />
            </View>
            <View style={styles.trustRow}>
              <View style={styles.trustItem}>
                <View style={styles.trustIcon}>
                  <MaterialCommunityIcons name="shield-check" size={26} color={Colors.accent} />
                </View>
                <Text style={styles.trustText}>SECURE NETWORK</Text>
              </View>
              <View style={styles.trustItem}>
                <View style={styles.trustIcon}>
                  <Ionicons name="headset" size={24} color={Colors.primary} />
                </View>
                <Text style={styles.trustText}>24/7 SUPPORT</Text>
              </View>
            </View>
          </Animated.View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                By continuing, you agree to KaamSetu's{' '}
                <Text style={styles.footerLink}>Terms of Service</Text>
                {' & '}
                <Text style={styles.footerLink}>Privacy Policy</Text>.
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
