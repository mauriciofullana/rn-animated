import React, {FunctionComponent, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Opacity: FunctionComponent = () => {
  const animation = useRef(new Animated.Value(1)).current;

  const animatedStyle = {
    opacity: animation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: true,
      duration: 500,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 500,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
  },
});

export default Opacity;
