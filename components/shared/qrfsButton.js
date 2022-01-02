import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function qrfsButton(props){
    let sanitizedProps = {
        styleBtn: props.styleBtn || styles.button,
        styleText: props.styleText || styles.btnText,
        btnText: props.text || "Button",
        onPressBtn: props.onPress || null
    }

    return(
        <Pressable
        style={sanitizedProps.styleBtn}
        onPress={sanitizedProps.onPressBtn}>
            <Text style={sanitizedProps.styleText}>{sanitizedProps.btnText}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EB610C',
        width: 300,
        height: '6%',
        marginVertical: 15
    },
    btnText: {
        fontSize: 27,
        color: 'white'
    }

});