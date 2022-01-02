import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './components/login';
import Register from './components/register';
import UserHome from './components/userHome';
import SquaredButton from './components/shared/squaredButton';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoginHere, setIsLoginHere] = React.useState(false)
  const [screen, setScreen] = React.useState('Login')

  // const getLoginInfo = async() => {
  //   try {
  //     const loginInfo = await AsyncStorage.getItem('login-key')
  //     if (value !==)
  //   }
  // }


  return (
    <NavigationContainer>
                <Stack.Navigator initialRouteName={screen} screenOptions={{
                  headerShown: false
                }}>
                    <Stack.Screen name="UserHome" component={UserHome}/>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Register" component={Register}/>
                </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
