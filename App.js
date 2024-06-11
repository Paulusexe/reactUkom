//App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './assets/components/LoginScreen';
import MainScreen from './assets/components/MainScreen';
import KalkulatorScreen from './assets/components/KalkulatorScreen';
import ContactScreen from './assets/components/ContactScreen';
import DzikirScreen from './assets/components/DzikirScreen';
import GalleryScreen from './assets/components/GalleryScreen';

const Stack = createStackNavigator();
 
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="Halaman Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="Kalkulator" component={KalkulatorScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Dzikir" component={DzikirScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
    </Stack.Navigator>
  );
}
 
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

