import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SquaredButton from './shared/squaredButton';
import Header from './shared/header';

export default function userHome() {

    const bg = require('../assets/backgrounds/dashboard-bg.png');
    const addIcon = require('../assets/usericons/fileComplaint.png')
    const viewIcon = require('../assets/usericons/viewComplaint.png')
    const delIcon = require('../assets/usericons/delComplaint.png')
    const settingsIcon = require('../assets/usericons/settings.png')

    return(
        <View style={styles.container}>
            <ImageBackground source={bg} resizeMode='cover' style={styles.bg}>
                <Header/>
                <View style={styles.body}>
                    <SquaredButton img={addIcon} text="File Complaint"/>
                    <SquaredButton img={viewIcon} text="View Complaint"/>
                    <SquaredButton img={delIcon} text="Delete Complaint"/>
                    <SquaredButton img={settingsIcon} text="Settings"/>
                </View>
            </ImageBackground>
            <StatusBar style='light' translucent={false}/>
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
        height: '100%',
    },
    header: {
        height: '15%',
        width: '100%',
        backgroundColor: '#145DA0',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    body: {
        marginVertical: 100,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    }
})