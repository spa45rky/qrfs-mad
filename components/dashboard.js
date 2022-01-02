import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Pressable, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserHome from './userHome';

const Stack = createNativeStackNavigator();

export default function userDashboard() {
    return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName='UserHome'>
                    <Stack.Screen name="UserHome" component={UserHome}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})