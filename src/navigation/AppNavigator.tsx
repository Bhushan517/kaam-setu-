import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

import LoginScreen from '../screens/LoginScreen';
import OtpVerifyScreen from '../screens/OtpVerifyScreen';
import UserSelectionScreen from '../screens/UserSelectionScreen';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: '#0d0d14' },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OtpVerify" component={OtpVerifyScreen} />
      <Stack.Screen name="UserSelection" component={UserSelectionScreen} />
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />
    </Stack.Navigator>
  );
}
