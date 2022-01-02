import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function userHome() {

    const bg = require('../assets/backgrounds/dashboard-bg.png');

    return(
        <View style={styles.container}>
            <ImageBackground source={bg} resizeMode='cover' style={styles.bg}>
                <View style={styles.header}>
                    <Text>User</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#145DA0',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    bg: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    header: {
        height: '15%',
        width: '100%',
        backgroundColor: '#145DA0',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

})