import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function RatingScreen({ navigation }: any): React.JSX.Element {
  const [rating, setRating] = useState(4);
  const [vibe, setVibe] = useState('GOOD');
  const [feedback, setFeedback] = useState('');

  const vibes = [
    { id: 'POOR', icon: 'emoticon-sad-outline' },
    { id: 'OKAY', icon: 'emoticon-neutral-outline' },
    { id: 'GOOD', icon: 'emoticon-happy' },
    { id: 'GREAT', icon: 'emoticon-excited-outline' },
    { id: 'ELITE', icon: 'fire' },
  ];

  return (
    <KeyboardAvoidingView 
      style={styles.root} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* ── Top Header ── */}
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#00d2ff" />
        </TouchableOpacity>
        
        <View style={styles.appBarCenter}>
          <Text style={styles.appBarTitle}>
            Kaam<Text style={styles.appBarTitleSecondary}>Setu</Text>
          </Text>
        </View>

        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.headerAvatar}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        
        {/* ── Worker Info Card ── */}
        <View style={styles.workerCard}>
          <View style={styles.workerAvatarWrapper}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/44.jpg' }}
              style={styles.workerAvatar}
            />
            <View style={styles.onlineDot} />
          </View>
          <View style={styles.workerInfo}>
            <Text style={styles.serviceCompletedLabel}>SERVICE COMPLETED</Text>
            <Text style={styles.workerName}>Rajesh Kumar</Text>
            <Text style={styles.workerRole}>Professional Electrician</Text>
          </View>
        </View>

        {/* ── Feedback Container ── */}
        <View style={styles.feedbackContainer}>
          <Text style={styles.titleText}>How was your{"\n"}experience?</Text>
          <Text style={styles.subtitleText}>Your feedback helps the community grow.</Text>

          {/* Stars */}
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((star) => {
              const isActive = star <= rating;
              return (
                <TouchableOpacity key={star} activeOpacity={0.7} onPress={() => setRating(star)}>
                  <View style={isActive ? styles.starGlow : null}>
                    <Ionicons 
                      name="star" 
                      size={44} 
                      color={isActive ? '#c084fc' : '#2a2a2e'} 
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Vibe Selection */}
          <Text style={styles.sectionLabel}>RATE THE VIBE</Text>
          <View style={styles.vibesRow}>
            {vibes.map((v) => {
              const isActive = vibe === v.id;
              return (
                <TouchableOpacity 
                  key={v.id} 
                  activeOpacity={0.8}
                  style={[styles.vibeItem, isActive && styles.vibeItemActive]} 
                  onPress={() => setVibe(v.id)}
                >
                  <MaterialCommunityIcons 
                    name={v.icon as any} 
                    size={32} 
                    color={isActive ? '#ffca28' : '#4b5563'} 
                  />
                  <Text style={[styles.vibeText, isActive && styles.vibeTextActive]}>
                    {v.id}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Text Input */}
          <Text style={styles.sectionLabel}>SHARE MORE DETAILS</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Tell us what you liked..."
              placeholderTextColor="#4b5563"
              multiline
              textAlignVertical="top"
              value={feedback}
              onChangeText={setFeedback}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity activeOpacity={0.9} style={styles.submitBtnWrapper}>
            <LinearGradient
              colors={['#b070ff', '#00d2ff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.btnGradient}
            >
              <Text style={styles.btnGradientText}>Submit Feedback</Text>
              <Ionicons name="send" size={16} color="#0d0d14" style={{ marginLeft: 8 }} />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* ── Bottom Elements ── */}
        <TouchableOpacity style={styles.skipBtn} activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>

        <View style={styles.secureRow}>
          <MaterialCommunityIcons name="shield" size={12} color="#4b5563" />
          <Text style={styles.secureText}>ENCRYPTED & SECURE</Text>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0a0f' },
  
  appBar: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    paddingTop: Platform.OS === 'ios' ? 56 : 40, 
    paddingBottom: 16, 
    backgroundColor: '#0a0a0f',
  },
  backBtn: { padding: 4 },
  appBarCenter: { flex: 1, alignItems: 'center' },
  appBarTitle: { color: '#ffffff', fontSize: 18, fontWeight: '800' },
  appBarTitleSecondary: { color: '#00d2ff' },
  headerAvatar: { width: 32, height: 32, borderRadius: 16, borderWidth: 1, borderColor: '#333' },

  scroll: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 40, alignItems: 'center' },

  workerCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#121215', 
    width: '100%', 
    maxWidth: 480, 
    borderRadius: 32, 
    padding: 16, 
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.03)'
  },
  workerAvatarWrapper: { position: 'relative' },
  workerAvatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#2a2a2e' },
  onlineDot: { position: 'absolute', bottom: 4, right: 0, width: 14, height: 14, borderRadius: 7, backgroundColor: '#a4ff66', borderWidth: 2, borderColor: '#121215' },
  workerInfo: { marginLeft: 16, flex: 1 },
  serviceCompletedLabel: { color: '#8b91a8', fontSize: 10, fontWeight: '800', letterSpacing: 1, marginBottom: 4 },
  workerName: { color: '#ffffff', fontSize: 18, fontWeight: '800', marginBottom: 2 },
  workerRole: { color: '#00d2ff', fontSize: 13, fontWeight: '600' },

  feedbackContainer: {
    backgroundColor: '#1d1d21',
    width: '100%',
    maxWidth: 480,
    borderRadius: 40,
    padding: 24,
    paddingTop: 32,
    alignItems: 'center',
    marginBottom: 32,
  },
  titleText: { color: '#ffffff', fontSize: 26, fontWeight: '800', textAlign: 'center', lineHeight: 32, marginBottom: 8 },
  subtitleText: { color: '#8b91a8', fontSize: 13, fontWeight: '500', textAlign: 'center', marginBottom: 32 },

  starsRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10, marginBottom: 40 },
  starGlow: {
    shadowColor: '#d4a5ff',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },

  sectionLabel: { color: '#ffffff', fontSize: 11, fontWeight: '800', letterSpacing: 1.5, alignSelf: 'flex-start', marginBottom: 16 },
  
  vibesRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 32 },
  vibeItem: { width: 56, height: 72, alignItems: 'center', justifyContent: 'center', borderRadius: 16 },
  vibeItemActive: { backgroundColor: 'rgba(0, 210, 255, 0.08)', borderWidth: 1, borderColor: '#00d2ff' },
  vibeText: { color: '#4b5563', fontSize: 10, fontWeight: '800', marginTop: 8 },
  vibeTextActive: { color: '#00d2ff' },

  inputWrapper: { width: '100%', backgroundColor: '#000000', borderRadius: 16, height: 120, padding: 16, marginBottom: 24 },
  textInput: { flex: 1, color: '#ffffff', fontSize: 15 },

  submitBtnWrapper: { width: '100%' },
  btnGradient: { height: 56, borderRadius: 28, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  btnGradientText: { color: '#0d0d14', fontSize: 16, fontWeight: '800' },

  skipBtn: { marginBottom: 16 },
  skipText: { color: '#a0a8c0', fontSize: 14, fontWeight: '600' },

  secureRow: { flexDirection: 'row', alignItems: 'center' },
  secureText: { color: '#4b5563', fontSize: 10, fontWeight: '800', letterSpacing: 1, marginLeft: 6 },
});
