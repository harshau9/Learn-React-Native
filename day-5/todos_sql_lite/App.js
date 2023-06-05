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
import SingleItem from  "./components/SingleItem"
const db = openDatabase("harsha.db");
const tbl = "taskListTable";

export function ExecuteSql(db, query, params = []) {
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
      .then((t) => {
        console.log("Success: ", t);
        ExecuteSql(db, `SELECT * FROM ${tbl}`)
          .then(t => {
            console.log("Data: ", t.rows._array);
            setTaskList(prev => [...t.rows._array])
          })
          .catch((e) => console.log("Failure while retrieving from table: ", e));
      })
      .catch((e) => console.log("Failure: ", e));
  }, []);

  const addTask = (newTask) => {
    ExecuteSql(db, `INSERT INTO ${tbl} (task,  status) VALUES(?,?)`, [
      newTask,
      0,
    ])
      .then((t) => {
        setTaskList((prev) => [...prev, {id:t?.insertedId, task:newTask, status:0}]);
        setInputText("")
        console.log("Succesfully added to table: ", t );
      })
      .catch((e) => console.log("Failure while adding to table: ", e));
  };
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
        <TouchableOpacity onPress={() => addTask(inputText)}>
          <AntDesign
            name="caretright"
            size={24}
            color="red"
            style={styles.inptBtn}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {taskList.map((item) => (
          // <Text key={item.id} style={styles.singleTask}>
          //   {item.task}
          // </Text>
          <SingleItem key={item.id} item={item} setTaskList={setTaskList}/>
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

});
