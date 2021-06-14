import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Chris");
  const [age, setAge] = useState("23");
  const [person, setPerson] = useState({ name: "Mario", age: 39 });

  const clickHandler = () => {
    setName("Mark");
    setPerson({ name: "Luigi", age: 32 });
  };

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder="write your name"
        onChangeText={(value) => setName(value)}
      />

      <Text>Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="write your age"
        onChangeText={(value) => setAge(value)}
      />

      <Text>
        name: {name}, age: {age}
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
