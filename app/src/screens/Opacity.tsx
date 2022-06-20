import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Opacity: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>OPACITY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Opacity;
