import React, {FunctionComponent, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Translate: FunctionComponent = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const animatedStyle = {transform: [{translateY: animation}]};

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 200,
      useNativeDriver: true,
      duration: 300,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        useNativeDriver: true,
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

export default Translate;
