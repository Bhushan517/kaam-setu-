import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import './src/i18n'; // Initialize i18n

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <AppNavigator />
    </NavigationContainer>
  );
}
