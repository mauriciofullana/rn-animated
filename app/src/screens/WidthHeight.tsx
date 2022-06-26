import React, {FunctionComponent, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const WidthHeight: FunctionComponent = () => {
  const animation = useRef(new Animated.Value(150)).current;

  const animatedStyle = {
    width: animation,
    height: animation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={styles.text}>
            Some example long text. Some example long text. Some example long
            text. Some example long text.
          </Text>
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
  },
  text: {
    color: '#FFF',
  },
});

export default WidthHeight;
