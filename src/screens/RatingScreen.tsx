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
import { styles } from './RatingScreenStyles';

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
