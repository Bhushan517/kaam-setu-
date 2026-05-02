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

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0a0f' },
  
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    paddingTop: Platform.OS === 'ios' ? 56 : 40, 
    paddingBottom: 16, 
    backgroundColor: '#0a0a0f',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.03)'
  },
  backBtn: { padding: 4, marginRight: 8 },
  headerProfile: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  avatarWrapper: { position: 'relative' },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#2a2a2e' },
  onlineDot: { position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, borderRadius: 5, backgroundColor: '#00e676', borderWidth: 2, borderColor: '#0a0a0f' },
  headerTextCol: { marginLeft: 12 },
  nameText: { color: '#ffffff', fontSize: 16, fontWeight: '800' },
  roleText: { color: '#00d2ff', fontSize: 10, fontWeight: '800', letterSpacing: 0.5, marginTop: 2 },
  
  callBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  
  scroll: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 24 },
  
  dateLabelWrapper: { alignItems: 'center', marginBottom: 24 },
  dateLabel: { backgroundColor: '#131317', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  dateText: { color: '#a0a8c0', fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  
  msgLeftWrapper: { marginBottom: 24, alignItems: 'flex-start', maxWidth: '85%' },
  msgLeft: { backgroundColor: '#1c1c1f', padding: 16, borderTopLeftRadius: 24, borderTopRightRadius: 24, borderBottomRightRadius: 24, borderBottomLeftRadius: 4 },
  msgText: { color: '#ffffff', fontSize: 14, lineHeight: 22 },
  timeTextLeft: { color: '#6b7280', fontSize: 10, marginTop: 8, marginLeft: 4, fontWeight: '500' },
  msgImage: { width: 240, height: 160, borderRadius: 16, marginTop: 12 },
  
  msgRightWrapper: { marginBottom: 24, alignItems: 'flex-end', alignSelf: 'flex-end', maxWidth: '85%' },
  msgRight: { backgroundColor: '#281d3d', borderWidth: 1, borderColor: '#372d4d', padding: 16, borderTopLeftRadius: 24, borderTopRightRadius: 24, borderBottomLeftRadius: 24, borderBottomRightRadius: 4 },
  timeRightRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8, marginRight: 4 },
  timeTextRight: { color: '#6b7280', fontSize: 10, fontWeight: '500' },
  
  systemPillWrapper: { alignItems: 'center', marginVertical: 12 },
  systemPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#121a15', borderWidth: 1, borderColor: '#192b21', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  systemText: { color: '#8b91a8', fontSize: 11, marginLeft: 6, fontWeight: '500' },
  
  quickReplyContainer: { paddingBottom: 16 },
  quickReplyScroll: { paddingHorizontal: 20, alignItems: 'center' },
  quickReplyBtn: { backgroundColor: '#1d1d21', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, marginRight: 12 },
  quickReplyText: { color: '#d1d5db', fontSize: 13, fontWeight: '500' },
  
  inputBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#0a0a0f', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.03)' },
  plusBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1f', borderRadius: 20, marginRight: 12 },
  inputWrapper: { flex: 1, backgroundColor: '#000000', borderRadius: 24, height: 48, justifyContent: 'center', paddingHorizontal: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  textInput: { color: '#ffffff', fontSize: 15 },
  sendBtn: { width: 48, height: 48, alignItems: 'center', justifyContent: 'center', marginLeft: 8 },
  sendBtnCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#b070ff', alignItems: 'center', justifyContent: 'center' },
});
