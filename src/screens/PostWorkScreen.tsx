import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'PostWork'>;

export default function PostWorkScreen({ navigation }: any): React.JSX.Element {
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [urgent, setUrgent] = useState(false);

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
          <TouchableOpacity style={styles.bellIcon}>
            <Ionicons name="notifications" size={22} color="#b070ff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.webContainer}>
          
          {/* ── Title ── */}
          <Text style={styles.pageTitle}>Post Work</Text>
          <Text style={styles.pageSubtitle}>
            Describe the task and find a local expert in minutes.
          </Text>

          {/* ── Form Section ── */}
          
          {/* Work Description */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>WORK DESCRIPTION</Text>
            <View style={styles.textAreaWrapper}>
              <TextInput
                style={styles.textArea}
                placeholder="What needs to be done? Be specific..."
                placeholderTextColor="#6b7280"
                multiline
                textAlignVertical="top"
                value={description}
                onChangeText={setDescription}
              />
            </View>
          </View>

          {/* Category */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>CATEGORY</Text>
            <TouchableOpacity style={styles.inputBox} activeOpacity={0.8}>
              <Text style={styles.inputText}>Home Maintenance</Text>
              <Ionicons name="chevron-down" size={20} color="#00d2ff" />
            </TouchableOpacity>
          </View>

          {/* Estimated Budget */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>ESTIMATED BUDGET (₹)</Text>
            <View style={styles.inputBox}>
              <Text style={styles.currencySymbol}>₹</Text>
              <TextInput
                style={styles.inputField}
                placeholder="0.00"
                placeholderTextColor="#6b7280"
                keyboardType="numeric"
                value={budget}
                onChangeText={setBudget}
              />
            </View>
          </View>

          {/* Reference Photos */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>REFERENCE PHOTOS</Text>
            <TouchableOpacity style={styles.photoUploadBox} activeOpacity={0.8}>
              <Ionicons name="camera" size={28} color="#a0a8c0" />
              <Text style={styles.photoUploadText}>Add up to 5 photos</Text>
            </TouchableOpacity>
          </View>

          {/* Location */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>LOCATION</Text>
            <View style={styles.mapContainer}>
              {/* Using a placeholder gradient to act as abstract map background */}
              <LinearGradient colors={['#1e2336', '#13131c']} style={styles.mapBackground} />
              <View style={styles.mapOverlay}>
                <View style={styles.locationPinRow}>
                  <Ionicons name="location" size={16} color="#00d2ff" />
                  <Text style={styles.locationText}>Greater Kailash, Delhi</Text>
                </View>
                <TouchableOpacity style={styles.targetIcon}>
                  <MaterialCommunityIcons name="target" size={18} color="#a0a8c0" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Urgent Toggle */}
          <View style={styles.urgentCard}>
            <View style={styles.urgentIconWrapper}>
              <Ionicons name="flash" size={20} color="#ff5252" />
            </View>
            <View style={styles.urgentTextCol}>
              <Text style={styles.urgentTitle}>Urgent Requirement 🚨</Text>
              <Text style={styles.urgentSub}>Prioritize this kaam for immediate attention</Text>
            </View>
            <Switch
              trackColor={{ false: '#333', true: '#5bc8f5' }}
              thumbColor={urgent ? '#ffffff' : '#a0a8c0'}
              ios_backgroundColor="#333"
              onValueChange={setUrgent}
              value={urgent}
            />
          </View>

          {/* Post Now Button */}
          <TouchableOpacity activeOpacity={0.9} style={styles.postButton}>
            <LinearGradient
              colors={['#b070ff', '#00d2ff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.postBtnGradient}
            >
              <Text style={styles.postBtnText}>Post Now</Text>
              <Ionicons name="send" size={18} color="#0d0d14" style={{ marginLeft: 8 }} />
            </LinearGradient>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0a0f' },
  appBar: { paddingHorizontal: 20, paddingTop: Platform.OS === 'ios' ? 56 : 40, paddingBottom: 16, backgroundColor: '#0a0a0f' },
  webContainerAppBar: { width: '100%', maxWidth: 480, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  appBarLeft: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 36, height: 36, borderRadius: 18, marginRight: 12 },
  appBarTitle: { color: '#ffffff', fontSize: 18, fontWeight: '800' },
  appBarTitleSecondary: { color: '#00d2ff' },
  bellIcon: { padding: 4 },
  scroll: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 80, alignItems: 'center' },
  webContainer: { width: '100%', maxWidth: 480 },
  pageTitle: { color: '#ffffff', fontSize: 32, fontWeight: '800', marginBottom: 6 },
  pageSubtitle: { color: '#8b91a8', fontSize: 14, marginBottom: 32, lineHeight: 22 },
  inputGroup: { marginBottom: 24 },
  inputLabel: { color: '#b070ff', fontSize: 11, fontWeight: '800', letterSpacing: 1.5, marginBottom: 12 },
  textAreaWrapper: { backgroundColor: '#13131c', borderRadius: 24, padding: 16, height: 120, borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)' },
  textArea: { color: '#ffffff', fontSize: 15, flex: 1 },
  inputBox: { backgroundColor: '#13131c', borderRadius: 20, paddingHorizontal: 16, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)' },
  inputText: { color: '#ffffff', fontSize: 15, fontWeight: '500' },
  currencySymbol: { color: '#00d2ff', fontSize: 18, fontWeight: '800', marginRight: 12 },
  inputField: { color: '#ffffff', fontSize: 16, fontWeight: '700', flex: 1 },
  photoUploadBox: { height: 110, borderRadius: 24, borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.1)', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0a0f' },
  photoUploadText: { color: '#a0a8c0', fontSize: 12, marginTop: 10, fontWeight: '500' },
  mapContainer: { height: 130, borderRadius: 24, overflow: 'hidden', position: 'relative', borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)' },
  mapBackground: { flex: 1 },
  mapOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: 'rgba(10,10,15,0.4)' },
  locationPinRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0a0a0f', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16 },
  locationText: { color: '#ffffff', fontSize: 12, fontWeight: '700', marginLeft: 6 },
  targetIcon: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#1a1f33', alignItems: 'center', justifyContent: 'center' },
  urgentCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#13131c', borderRadius: 24, padding: 20, marginBottom: 32, borderWidth: 1, borderColor: 'rgba(255,255,255,0.03)' },
  urgentIconWrapper: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255, 82, 82, 0.1)', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  urgentTextCol: { flex: 1, paddingRight: 10 },
  urgentTitle: { color: '#ffffff', fontSize: 15, fontWeight: '700', marginBottom: 4 },
  urgentSub: { color: '#8b91a8', fontSize: 11, lineHeight: 16 },
  postButton: { width: '100%', marginBottom: 20 },
  postBtnGradient: { height: 60, borderRadius: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  postBtnText: { color: '#0d0d14', fontSize: 18, fontWeight: '900', letterSpacing: 0.5 },
});
