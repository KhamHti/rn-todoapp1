import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
  
    return (
      <View style={styles.header} >
        <Text style={styles.title}>My ToDoApp</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: 96,
        paddingTop: 40,
        backgroundColor: "#F0E9D2",                 //#F2F7A1//
    },
    title: {
        fontSize: 35,
        textAlign: "center",
        color: "#181D31",
    },
})