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
import { styles } from './PostWorkScreenStyles';

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
          <TouchableOpacity style={styles.bellIcon} onPress={() => navigation.navigate('Notifications')}>
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
