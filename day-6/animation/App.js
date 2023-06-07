import {useState, useRef} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const radius = useRef(new Animated.Value(0)).current
  const scale = useRef(new Animated.Value(1)).current

  const changeRadius = () => {
    Animated.parallel([
    Animated.spring(radius, {
      toValue: radius._value == 0 ? 50 : 0,
      useNativeDriver: true,
    }).start(),
    Animated.spring(scale, {
      toValue: scale._value == 1 ? 0.5 : 1,
      useNativeDriver: true,
    }).start(),
    ]);
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, {borderRadius: radius, scale}]}>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={changeRadius}>
        <Text style={styles.buttonText}>Animate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: "center",
    padding: 8,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius :10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  content: {
    height :100,
    width: 100,
    backgroundColor: "skyblue",
    margin: 10,
  }
});
