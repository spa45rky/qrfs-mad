import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserScreen from './userScreen';

export default function userDashboard() {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="UserDash" component={UserScreen}/>
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