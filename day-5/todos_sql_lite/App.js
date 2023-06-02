import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { openDatabase } from "expo-sqlite";

const db = openDatabase("harsha.db");
const tbl = "taskListTable";
 
export function ExecuteSql(db, query, params=[]) {
  return new Promise((resolve, reject) => {
    db.transaction((txn) => {
      txn.executeSql(
        query,
        params,
        (tx, res) => resolve(res),
        (e) => reject(e)
      );
    });
  });
}

export default function App() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    ExecuteSql(
      db,
      `CREATE TABLE IF NOT EXISTS ${tbl} (id INTEGER PRIMARY KEY AUTOINCREMENT, task VARCHAR(20), status INTEGER(1))`
    )
      .then(t => console.log("Success: ", t))
      .catch(e => console.log("Failure: ", e));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 18 }}>
        SQL-Lite Task List
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={(t) => setInputText(t)}
        />
        <TouchableOpacity
          onPress={() => setTaskList((prev) => [...prev, inputText])}
        >
          <AntDesign
            name="caretright"
            size={24}
            color="red"
            style={styles.inptBtn}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {taskList.map((task, i) => (
          <Text key={i} style={styles.singleTask}>
            {task}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    padding: 5,
    // backgroundColor: "gainsboro",
  },
  inptBtn: {
    borderWidth: 0.5,
    borderRadius: 5,
    marginLeft: 7,
    padding: 5,
    backgroundColor: "plum",
    borderWidth: 1,
  },
  textInput: { borderWidth: 0.5, flex: 1, borderRadius: 5, paddingLeft: 7 },
  singleTask: {
    marginTop: 5,
    paddingLeft: 7,
    color: "navy",
    fontSize: 15,
  },
});
