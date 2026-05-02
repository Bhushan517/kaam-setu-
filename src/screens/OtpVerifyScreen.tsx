import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import Button from '../components/Button';
import { Colors, Spacing, BorderRadius, FontSize } from '../constants/theme';
import { styles } from './OtpVerifyScreenStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'OtpVerify'>;

const OTP_LENGTH = 6;

export default function OtpVerifyScreen({ route, navigation }: Props): React.JSX.Element {
  const { phone } = route.params;
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRef = useRef<TextInput>(null);
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setResendTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 8, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -8, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 8, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 60, useNativeDriver: true }),
    ]).start();
  };

  const handleVerify = () => {
    if (code.length < OTP_LENGTH) {
      shake();
      Alert.alert('Invalid OTP', 'Please enter all 6 digits.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('UserSelection');
    }, 1500);
  };

  // Create an array of digits to render
  const otpDigits = Array(OTP_LENGTH).fill(0).map((_, i) => code[i] || '');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.root}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.bg} />
        
        {/* Hidden TextInput for handling keyboard automatically */}
        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={(text) => {
            const numbers = text.replace(/[^0-9]/g, '');
            if (numbers.length <= OTP_LENGTH) setCode(numbers);
          }}
          keyboardType="numeric"
          maxLength={OTP_LENGTH}
          style={styles.hiddenInput}
          autoFocus={true}
        />

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.container}>
            <View style={styles.webContainer}>
              {/* Back */}
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={22} color={Colors.textPrimary} />
              </TouchableOpacity>

            {/* Header */}
            <View style={styles.header}>
              <View style={styles.iconCircle}>
                <Ionicons name="chatbubble-ellipses-outline" size={32} color={Colors.accent} />
              </View>
              <Text style={styles.title}>Verify OTP</Text>
              <Text style={styles.subtitle}>
                We sent a 6-digit code to{'\n'}
                <Text style={styles.phoneHighlight}>+91 {phone.slice(0, 5)} {phone.slice(5)}</Text>
              </Text>
            </View>

            {/* OTP Boxes */}
            <TouchableOpacity 
              activeOpacity={1} 
              onPress={() => inputRef.current?.focus()}
            >
              <Animated.View style={[styles.otpRow, { transform: [{ translateX: shakeAnim }] }]}>
                {otpDigits.map((digit, i) => (
                  <View 
                    key={i} 
                    style={[
                      styles.otpBox, 
                      digit ? styles.otpBoxFilled : {},
                      code.length === i ? styles.otpBoxActive : {}
                    ]}
                  >
                    <Text style={styles.otpInput}>
                      {digit}
                    </Text>
                  </View>
                ))}
              </Animated.View>
            </TouchableOpacity>

            {/* Verify Button */}
            <Button label="Verify OTP" onPress={handleVerify} loading={loading} />

            {/* Resend */}
            <View style={styles.resendRow}>
              <Text style={styles.resendText}>Didn't receive code? </Text>
              {resendTimer > 0 ? (
                <Text style={styles.resendTimer}>Resend in {resendTimer}s</Text>
              ) : (
                <TouchableOpacity onPress={() => setResendTimer(30)}>
                  <Text style={styles.resendLink}>Resend OTP</Text>
                </TouchableOpacity>
              )}
            </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
