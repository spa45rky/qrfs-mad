import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function login() {

    const bg = require('../assets/backgrounds/login-bg.png');
    const qrfsblack = require('../assets/logos/qrfs-black.png');

    const myOnPress = () => {

    }

    return(
        <View style={styles.container}>
            <ImageBackground source={bg} resizeMode='cover' style={styles.bg}>
                <Image source={qrfsblack} style={styles.logo}/>
                <Text style={styles.labelText}>EMAIL</Text>
                <TextInput value='' style={styles.textInput}/>
                <Text style={styles.labelText}>PASSWORD</Text>
                <TextInput value='' style={styles.textInput}/>
                <Pressable style={styles.forgotBtn}><Text style={styles.forgotText}>FORGOT PASSWORD</Text></Pressable>
                <Pressable onPress={myOnPress} style={styles.loginBtn}><Text style={styles.loginText}>LOGIN</Text></Pressable>
                <Text style={styles.signupText}>DON'T HAVE AN ACCOUNT? <Pressable style={styles.signupBtn}><Text style={styles.signupText1}>SIGN UP</Text></Pressable></Text>
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
        width: 430,
        height: 430,
        position: 'relative',
        bottom: 50
    },
    labelText: {
        alignSelf: 'flex-start',
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'normal',
        marginBottom: 10,
        marginHorizontal: 52
    },
    textInput: {
        backgroundColor: 'white',
        width: 300,
        height: '5%',
        marginVertical: 10,
        minHeight: 40

    },
    forgotBtn: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        marginRight: 52
    },
    forgotText: {
        color: 'white'
    },
    loginBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EB610C',
        width: 300,
        height: '6%',
        marginVertical: 15
    },
    signupText: {
        color: 'white',
        fontSize: 15
    },
    signupText1: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    signupBtn: {
        height: 18
    },
    loginText: {
        fontSize: 27,
        color: 'white'
    }

  });