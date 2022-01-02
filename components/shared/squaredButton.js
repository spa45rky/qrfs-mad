import React from "react";
import { Pressable, StyleSheet, Text, Image } from "react-native";

export default function squaredButton(props){
    let sanitizedProps = {
        styleBtn: props.styleBtn || styles.button,
        styleText: props.styleText || styles.btnText,
        btnText: props.text || "Button",
        onPressBtn: props.onPress || null,
        icon: props.img || null
    }

    return(
        <Pressable
        style={sanitizedProps.styleBtn}
        onPress={sanitizedProps.onPressBtn}>
            <Image source={sanitizedProps.icon} style={styles.styleIcon}/>
            <Text style={sanitizedProps.styleText}>{sanitizedProps.btnText}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 130,
        marginHorizontal: 30,
        marginVertical: 20,
        backgroundColor: '#145DA0',
        borderRadius: 37.5
    },
    btnText: {
        position: 'relative',
        top: 35,
        fontSize: 13
    },
    styleIcon: {
        width: 80,
        height: 80,
        top: 10
    }
});