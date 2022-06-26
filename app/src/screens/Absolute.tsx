import React, {FunctionComponent, useRef} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Absolute: FunctionComponent = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const bottomAnimation = animation.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: [0, 200, 0, 150, 0],
  });

  const leftAnimation = animation.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: [0, 100, 200, 300, 400],
  });

  const animatedStyle = {bottom: bottomAnimation, left: leftAnimation};

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 4,
      useNativeDriver: false,
      duration: 3000,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={startAnimation}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
  },
  text: {
    color: '#FFF',
  },
});

export default Absolute;
