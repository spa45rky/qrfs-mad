import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';


export default function header(props){
    let sanitizedProps = {
        text: props.text || "USER",
        profileIcon: props.pfp || require('../../assets/usericons/pfp.png'),
        styleHeader: props.headerStyle || styles.header
    }

    return(
        <View style={sanitizedProps.styleHeader}>
            <Image source={sanitizedProps.profileIcon} style={styles.icon}/>
            <Text style={styles.text}>{sanitizedProps.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '12%',
        width: '100%',
        backgroundColor: '#145DA0',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    icon: {
        width: 70,
        height: 70,
        margin: 20
    },
    text: {
        color: 'white',
        fontSize: 20
    }

  });