import React from 'react';
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
import { styles } from './ChatScreenStyles';

export default function ChatScreen({ navigation }: any): React.JSX.Element {
  return (
    <KeyboardAvoidingView 
      style={styles.root} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
        
        <View style={styles.headerProfile}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/44.jpg' }}
              style={styles.avatar}
            />
             <View style={styles.onlineDot} />
          </View>
          <View style={styles.headerTextCol}>
            <Text style={styles.nameText}>Arjun Sharma</Text>
            <Text style={styles.roleText}>PLUMBING SPECIALIST</Text>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient
            colors={['#8b5cf6', '#00d2ff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.callBtn}
          >
            <Ionicons name="call" size={18} color="#0d0d14" />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* ── Chat Content ── */}
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        
        {/* Date Pill */}
        <View style={styles.dateLabelWrapper}>
          <View style={styles.dateLabel}>
            <Text style={styles.dateText}>TODAY</Text>
          </View>
        </View>

        {/* Msg Left */}
        <View style={styles.msgLeftWrapper}>
          <View style={styles.msgLeft}>
            <Text style={styles.msgText}>Namaste! I have reviewed your request for the kitchen sink repair. I can be there by 4:00 PM today.</Text>
          </View>
          <Text style={styles.timeTextLeft}>14:20</Text>
        </View>

        {/* Msg Right */}
        <View style={styles.msgRightWrapper}>
          <View style={styles.msgRight}>
            <Text style={styles.msgText}>That works perfectly for me. Will you be bringing the replacement parts or should I buy them?</Text>
          </View>
          <View style={styles.timeRightRow}>
            <Text style={styles.timeTextRight}>14:22</Text>
            <Ionicons name="checkmark-done" size={14} color="#00d2ff" style={{ marginLeft: 4 }} />
          </View>
        </View>

        {/* Msg Left with Image */}
        <View style={styles.msgLeftWrapper}>
          <View style={styles.msgLeft}>
            <Text style={styles.msgText}>I'll bring the standard gaskets. If it's a pipe replacement, I'll let you know after the inspection. Here is my previous work on similar sinks:</Text>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=250' }} 
              style={styles.msgImage} 
            />
          </View>
          <Text style={styles.timeTextLeft}>14:25</Text>
        </View>

        {/* System Verification Pill */}
        <View style={styles.systemPillWrapper}>
          <View style={styles.systemPill}>
            <MaterialCommunityIcons name="shield-check" size={14} color="#00e676" />
            <Text style={styles.systemText}>Arjun is a Verified KaamSetu Pro</Text>
          </View>
        </View>

      </ScrollView>

      {/* ── Quick Replies ── */}
      <View style={styles.quickReplyContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickReplyScroll}>
          <TouchableOpacity style={styles.quickReplyBtn}>
            <Text style={styles.quickReplyText}>Sounds good</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickReplyBtn}>
            <Text style={styles.quickReplyText}>Can you come earlier?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickReplyBtn}>
            <Text style={styles.quickReplyText}>What's the estimate?</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* ── Input Bar ── */}
      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.plusBtn}>
          <Ionicons name="add-circle" size={24} color="#a0a8c0" />
        </TouchableOpacity>
        
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.textInput} 
            placeholder="Type a message..." 
            placeholderTextColor="#6b7280"
          />
        </View>

        <TouchableOpacity style={styles.sendBtn} activeOpacity={0.8}>
          <View style={styles.sendBtnCircle}>
            <Ionicons name="send" size={14} color="#0d0d14" style={{ marginLeft: 2, marginTop: 2 }} />
          </View>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}
