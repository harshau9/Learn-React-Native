// how to use icons
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IconsPack() {
  return (
    <View style={styles.container}>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Ionicons name="eye-off" size={32} color="green" />
      <Ionicons name="fast-food" size={32} color="green" />
      <Ionicons name="finger-print" size={32} color="green" />                  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});