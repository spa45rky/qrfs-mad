import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QrfsButton from './shared/qrfsButton';
import axios from 'axios';
import qs from 'qs';

export default function register({navigation}) {

    const [user, setUser] = React.useState("")
    const [pass, setPass] = React.useState("")
    const [name, setName] = React.useState("")
    const [org, setOrg] = React.useState("")

    const bg = require('../assets/backgrounds/register-bg.png');
    const qrfsblack = require('../assets/logos/qrfs-black-small.png');
    const baseURL = "https://qrfs-backend.herokuapp.com/api/auth/register"

    const onPress = () => {
        let data = {'email': user, 'password': pass, 'name': name, 'org_id': org}
        let config = {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post(baseURL, qs.stringify(data), config).then((response)=>{
            response.data === 0 ? alert("USER ALREADY REGISTERED!") : navigation.navigate("UserHome")
        }).catch((error)=> {
            console.log(error)
        })
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={bg} resizeMode='cover' style={styles.bg}>
                <Image source={qrfsblack} style={styles.logo}/>
                <Text style={styles.labelText}>EMAIL</Text>
                <TextInput value={user} onChangeText={setUser} style={styles.textInput}/>
                <Text style={styles.labelText}>PASSWORD</Text>
                <TextInput value={pass} onChangeText={setPass} style={styles.textInput}/>
                <Text style={styles.labelText}>NAME</Text>
                <TextInput value={name} onChangeText={setName} style={styles.textInput}/>
                <Text style={styles.labelText}>ORGANIZATION ID</Text>
                <TextInput value={org} onChangeText={setOrg} style={styles.textInput}/>
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