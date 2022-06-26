import React, {FunctionComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AbsoluteScreen,
  HomeScreen,
  OpacityScreen,
  ScaleScreen,
  TranslateScreen,
  WidthHeigthScreen,
} from './src/screens';

const Stack = createStackNavigator();

const App: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Opacity" component={OpacityScreen} />
        <Stack.Screen name="Translate" component={TranslateScreen} />
        <Stack.Screen name="Scale" component={ScaleScreen} />
        <Stack.Screen name="WidthHeight" component={WidthHeigthScreen} />
        <Stack.Screen name="Absolute" component={AbsoluteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
