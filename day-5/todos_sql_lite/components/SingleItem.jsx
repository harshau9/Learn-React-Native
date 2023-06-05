import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";

const SingleItem = ({ item }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [inputText, setInputText] = useState(item.task);

  const updateTask = () => {
    //update sqlite db and then update the state

    setIsEditable(false);
  };

  return (
    <View>
      {isEditable ? (
        <View style={styles.itemContainer}>
          <TextInput
            style={{ flex: 1 }}
            value={inputText}
            onChangeText={(t) => setInputText(t)}
          />
          <TouchableOpacity>
            <MaterialCommunityIcons name="check-bold" size={24} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.itemContainer}>
          <Text key={item.id} style={styles.singleTask}>
            {item.task}
          </Text>
          <TouchableOpacity onPress={() => updateTask()}>
            <MaterialCommunityIcons name="square-edit-outline" s ize={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTask()}>
            <MaterialCommunityIcons name="delete-forever-outline" s ize={24} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  itemContainer: {
    borderWidth: 0.5,
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 5,
  },
});

export default SingleItem;
