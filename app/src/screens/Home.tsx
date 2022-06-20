import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Screen = 'Home' | 'Opacity';

const Home: FunctionComponent = () => {
  const navigation = useNavigation();
  const handleNavigation = (screen: Screen) => {
    navigation.navigate({name: screen});
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.action}
        onPress={() => handleNavigation('Opacity')}>
        <Text style={styles.actionText}>OPACITY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    backgroundColor: '#25b5b8',
    padding: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Home;