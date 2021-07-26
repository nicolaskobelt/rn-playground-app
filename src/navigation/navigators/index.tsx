import React from 'react';
import SplashScreen from '../../screens/SplashScreen/index';
import App from '../../App';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

const Navigator: React.FunctionComponent = () => (
  <RootStack.Navigator
    initialRouteName="SplashScreen"
    headerMode="none"
    screenOptions={{
      gestureEnabled: false,
      animationEnabled: false,
    }}>
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="App" component={App} />
  </RootStack.Navigator>
);

export default Navigator;
