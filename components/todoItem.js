import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/rnlg.jpg';

export default function ToDoItem({item, pressHandler}) {
    return (
        <TouchableOpacity style={styles.list} onPress={() => pressHandler(item.key)} >
            <Image source={logo} style={{ width: 20, height: 20 }} />
            <Text style={styles.text} >{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    list: {
        padding: 10,
        marginTop: 15,
        borderColor: "#F0E9D2",
        backgroundColor: "#F0E9D2",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 20,
        flexDirection: "row",
    },
    text: {
        marginLeft: 15,
    }
})