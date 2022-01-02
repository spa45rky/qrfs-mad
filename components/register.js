import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QrfsButton from './shared/qrfsButton';

export default function register() {

    const bg = require('../assets/backgrounds/register-bg.png');
    const qrfsblack = require('../assets/logos/qrfs-black-small.png');

    const onPress = () => {

    }

    return(
        <View style={styles.container}>
            <ImageBackground source={bg} resizeMode='cover' style={styles.bg}>
                <Image source={qrfsblack} style={styles.logo}/>
                <Text style={styles.labelText}>EMAIL</Text>
                <TextInput value='' style={styles.textInput}/>
                <Text style={styles.labelText}>PASSWORD</Text>
                <TextInput value='' style={styles.textInput}/>
                <Text style={styles.labelText}>NAME</Text>
                <TextInput value='' style={styles.textInput}/>
                <Text style={styles.labelText}>ORGANIZATION ID</Text>
                <TextInput value='' style={styles.textInput}/>
                <QrfsButton text="SIGN UP" onPress={onPress}/>
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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    logo: {
        width: 350,
        height: 200,
        position: 'relative',
        top: 50
    },
    labelText: {
        alignSelf: 'flex-start',
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'normal',
        marginVertical: 10,
        marginHorizontal: 52,
    },
    textInput: {
        backgroundColor: 'white',
        width: 300,
        height: '5%',
        marginVertical: 10,
        minHeight: 40

    },
});