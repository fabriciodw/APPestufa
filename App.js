import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import { Login } from './src/views/Login'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={Login} />      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

