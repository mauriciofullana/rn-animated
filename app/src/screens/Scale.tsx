import React, {FunctionComponent, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Scale: FunctionComponent = () => {
  const animation = useRef(new Animated.Value(1)).current;

  const animatedStyle = {transform: [{scale: animation}]};

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      useNativeDriver: true,
      duration: 2000,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 2000,
      }).start(() => {
        Animated.timing(animation, {
          toValue: -1,
          useNativeDriver: true,
          duration: 2000,
        }).start(() => {
          Animated.timing(animation, {
            toValue: 1,
            useNativeDriver: true,
            duration: 2000,
          }).start();
        });
      });
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={styles.text}>SCALE</Text>
        </Animated.View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
  },
});

export default Scale;
