import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import ToDoItem from "./components/todoItem";
import AddToDo from "./components/addTodo";

export default function App() {
  const [todos, setToDos] = useState([
    { text: "go buy coffee", key: "1" },
    { text: "make a cup of coffee", key: "2" },
    { text: "play on the swift playground", key: "3" },
    { text: "create an app", key: "4" },
    { text: "read manga", key: "5" },
    { text: "watch anime", key: "6" },
    { text: "go swim", key: "7" },
    { text: "play game", key: "8" },
    { text: "relax", key: "9" },
  ]);

  const pressHandler = (key) => {
    setToDos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 4) {
      setToDos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Sorry!!!", "You should add more than 4 letter..", [
        { text: "Okay" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    backgroundColor: "#678983",
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
    color: "#F0E9D2",
  },
});
