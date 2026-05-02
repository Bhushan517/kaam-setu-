import React, { useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, BorderRadius, FontSize, GradientColors } from '../constants/theme';
import { ButtonProps } from '../types';

export default function Button({
  label,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary',
  fullWidth = true,
  icon,
}: ButtonProps): React.JSX.Element {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () =>
    Animated.spring(scale, { toValue: 0.96, useNativeDriver: true }).start();
  const onPressOut = () =>
    Animated.spring(scale, { toValue: 1, friction: 4, useNativeDriver: true }).start();

  const containerStyle: ViewStyle[] = [
    styles.base,
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
  ].filter(Boolean) as ViewStyle[];

  if (variant === 'outline') {
    return (
      <Animated.View style={{ transform: [{ scale }], ...(fullWidth && { width: '100%' }) }}>
        <TouchableOpacity
          style={[...containerStyle, styles.outline]}
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          disabled={disabled || loading}
          activeOpacity={0.85}
        >
          {loading ? (
            <ActivityIndicator color={Colors.accent} size="small" />
          ) : (
            <>
              {icon}
              <Text style={[styles.label, styles.labelOutline]}>{label}</Text>
            </>
          )}
        </TouchableOpacity>
      </Animated.View>
    );
  }

  return (
    <Animated.View style={{ transform: [{ scale }], ...(fullWidth && { width: '100%' }) }}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled || loading}
        activeOpacity={0.9}
      >
        <LinearGradient
          colors={GradientColors.button}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={containerStyle}
        >
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <>
              {icon}
              <Text style={styles.label}>{label}</Text>
            </>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 56,
    borderRadius: BorderRadius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#9b59d0',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.accent,
    shadowColor: 'transparent',
    elevation: 0,
  },
  label: {
    color: Colors.textPrimary,
    fontSize: FontSize.lg,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  labelOutline: {
    color: Colors.accent,
  },
});
