import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Colors, Spacing, BorderRadius, FontSize } from '../constants/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props): React.JSX.Element {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.bg} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Back */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>

        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={52} color={Colors.accent} />
          </View>
          <Text style={styles.name}>Rajesh Kumar</Text>
          <Text style={styles.phone}>+91 98765 43210</Text>
          <View style={styles.verifiedBadge}>
            <Ionicons name="checkmark-circle" size={14} color={Colors.success} />
            <Text style={styles.verifiedText}>Verified Worker</Text>
          </View>
        </View>

        {/* Info Cards */}
        {[
          { icon: 'briefcase-outline' as const, label: 'Skill', value: 'Electrician' },
          { icon: 'location-outline' as const, label: 'Location', value: 'Pune, Maharashtra' },
          { icon: 'star-outline' as const, label: 'Rating', value: '4.8 / 5.0' },
          { icon: 'time-outline' as const, label: 'Experience', value: '5 Years' },
        ].map((item) => (
          <View key={item.label} style={styles.infoCard}>
            <View style={styles.infoIcon}>
              <Ionicons name={item.icon} size={22} color={Colors.primary} />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>{item.label}</Text>
              <Text style={styles.infoValue}>{item.value}</Text>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.editBtn}>
          <Ionicons name="create-outline" size={18} color={Colors.accent} />
          <Text style={styles.editBtnText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bg },
  scroll: { paddingHorizontal: Spacing.lg, paddingTop: 56, paddingBottom: 40 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.bgCard, alignItems: 'center', justifyContent: 'center', marginBottom: Spacing.xl },
  avatarSection: { alignItems: 'center', marginBottom: 32 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: Colors.bgCard, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: Colors.accent, marginBottom: 14 },
  name: { fontSize: FontSize.xxl, fontWeight: '800', color: Colors.textPrimary },
  phone: { color: Colors.textSecondary, fontSize: FontSize.md, marginTop: 4 },
  verifiedBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 8, backgroundColor: Colors.bgCard, paddingHorizontal: 12, paddingVertical: 6, borderRadius: BorderRadius.full },
  verifiedText: { color: Colors.success, fontSize: FontSize.sm, fontWeight: '600' },
  infoCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.bgCard, borderRadius: BorderRadius.lg, padding: Spacing.md, marginBottom: 10, gap: 14, borderWidth: 1, borderColor: Colors.borderLight },
  infoIcon: { width: 44, height: 44, borderRadius: 12, backgroundColor: Colors.bgInput, alignItems: 'center', justifyContent: 'center' },
  infoText: { flex: 1 },
  infoLabel: { color: Colors.textMuted, fontSize: FontSize.xs, fontWeight: '600', letterSpacing: 0.5, marginBottom: 2 },
  infoValue: { color: Colors.textPrimary, fontSize: FontSize.md, fontWeight: '700' },
  editBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8, padding: Spacing.md, borderRadius: BorderRadius.lg, borderWidth: 1.5, borderColor: Colors.accent },
  editBtnText: { color: Colors.accent, fontSize: FontSize.md, fontWeight: '700' },
});
