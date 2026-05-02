import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import DashboardScreen from '../screens/DashboardScreen';
import RequestsScreen from '../screens/RequestsScreen';
import PostWorkScreen from '../screens/PostWorkScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.bottomNav}>
      <View style={styles.webContainerBottomNav}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          
          let label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

          let iconName = 'home';
          if (route.name === 'Requests') iconName = 'flash';
          if (route.name === 'PostWork') iconName = 'add-circle';
          if (route.name === 'History') iconName = 'time';
          if (route.name === 'Profile') iconName = 'person';

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View key={route.key} style={styles.tabContainer}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                onPress={onPress}
                style={[styles.navItem, isFocused && route.name === 'PostWork' && styles.navItemActive]}
                activeOpacity={0.8}
              >
                <Ionicons 
                  name={iconName as any} 
                  size={isFocused && route.name === 'PostWork' ? 28 : 22} 
                  color={isFocused ? (route.name === 'PostWork' ? '#d4a5ff' : '#9b59d0') : '#6b7280'} 
                />
                <Text 
                  numberOfLines={1} 
                  adjustsFontSizeToFit 
                  style={[styles.navLabel, isFocused && styles.navLabelActive, isFocused && route.name === 'PostWork' && styles.navLabelActivePost]}
                >
                  {label.toUpperCase()}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props: any) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ tabBarLabel: 'HOME' }} />
      <Tab.Screen name="Requests" component={RequestsScreen} options={{ tabBarLabel: 'REQUESTS' }} />
      <Tab.Screen name="PostWork" component={PostWorkScreen} options={{ tabBarLabel: 'POST' }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarLabel: 'HISTORY' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'PROFILE' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#13131c',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.03)',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    elevation: 0,
  },
  webContainerBottomNav: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    height: 60,
  },
  navItem: {
    alignItems: 'center',
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  navItemActive: {
    transform: [{ translateY: -10 }],
    backgroundColor: '#1a1b26',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '#0a0a0f',
    shadowColor: '#b070ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  navLabel: {
    color: '#6b7280',
    fontSize: 9,
    fontWeight: '800',
    marginTop: 2,
    letterSpacing: 0.5,
  },
  navLabelActive: {
    color: '#9b59d0',
  },
  navLabelActivePost: {
    color: '#d4a5ff',
    marginTop: 4,
  },
  tabContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
