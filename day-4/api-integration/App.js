import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import storeData from "./components/storeData";
import readData from "./components/readData";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter !== 0) storeData("counter", counter);
  }, [counter]);

  useEffect(() => {
    readData("counter").then((data) => {
      console.log(data)
      if (data) {
        setCounter(+data);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Counter App + storing count value in Async storage</Text>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => setCounter((prev) => prev - 1)}
          style={{ ...styles.btn }}
        >
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 15, fontSize: 20 }}>{counter}</Text>
        <TouchableOpacity
          onPress={() => setCounter((prev) => prev + 1)}
          style={styles.btn}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.btn, { marginTop: 20 }]}
        onPress={() => readData("counter").then((data) => console.log(data))}
      >
        <Text>Get Count Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, { marginTop: 20 }]}
        onPress={() => {
          storeData("counter", 0).then(() => {
            setCounter((prev) => 0);
          });
        }}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
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
  btn: {
    textAlign: "center",
    backgroundColor: "aqua",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  textBox: {
    marginTop: 30,
  },
});
