import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, BorderRadius, FontSize, Spacing } from '../constants/theme';
import { InputProps } from '../types';

export default function Input({
  value,
  onChangeText,
  placeholder,
  label,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  leftIcon,
  rightIcon,
  error,
}: InputProps): React.JSX.Element {
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputRow,
          focused && styles.inputRowFocused,
          !!error && styles.inputRowError,
        ]}
      >
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}

        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.textDisabled}
          secureTextEntry={hidden}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {secureTextEntry ? (
          <TouchableOpacity
            style={styles.iconRight}
            onPress={() => setHidden((h) => !h)}
          >
            <Ionicons
              name={hidden ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={Colors.textMuted}
            />
          </TouchableOpacity>
        ) : (
          rightIcon && <View style={styles.iconRight}>{rightIcon}</View>
        )}
      </View>

      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  label: {
    color: Colors.textSecondary,
    fontSize: FontSize.xs,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: Spacing.sm,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgInput,
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    borderColor: Colors.border,
    height: 56,
    overflow: 'hidden',
  },
  inputRowFocused: {
    borderColor: Colors.accent,
    backgroundColor: 'rgba(91,200,245,0.05)',
  },
  inputRowError: {
    borderColor: Colors.error,
  },
  iconLeft: {
    paddingHorizontal: Spacing.md,
  },
  iconRight: {
    paddingHorizontal: Spacing.md,
  },
  input: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: FontSize.lg,
    fontWeight: '500',
    height: '100%',
    paddingHorizontal: Spacing.md,
  },
  error: {
    color: Colors.error,
    fontSize: FontSize.sm,
    marginTop: Spacing.xs,
    marginLeft: 4,
  },
});
