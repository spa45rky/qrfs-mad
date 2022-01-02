import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import UserHome from './components/userHome';
import UserDashboard from './components/dashboard';

export default function App() {
  const [isLoginHere, setIsLoginHere] = React.useState(false)

  // const getLoginInfo = async() => {
  //   try {
  //     const loginInfo = await AsyncStorage.getItem('login-key')
  //     if (value !==)
  //   }
  // }


  return (
    <View style={styles.container}>
      <Register/>
      <StatusBar style="auto" />
    </View>
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
