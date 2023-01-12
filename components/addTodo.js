import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


export default function AddToDo({submitHandler}) {

  const[text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
    } 

  return (
    <View>
       <TextInput
          style={styles.input}
          placeholder = 'add new todo....'
          onChangeText ={changeHandler}
       />
       <Button onPress={() => submitHandler(text)} title="Add Todo" color="#181D31" />
    </View>
  )}


 
   
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 7,
        borderBottomWidth: 2,
        borderBottomColor: "#181D31",

    }
})