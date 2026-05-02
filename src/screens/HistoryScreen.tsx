import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HistoryScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>History Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0a0a0f', alignItems: 'center', justifyContent: 'center' },
  text: { color: '#ffffff', fontSize: 20, fontWeight: '700' },
});
