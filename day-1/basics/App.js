import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [selectionCount, setSelectionCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [data, setData] = useState([
    { id: 1, key: "anirudh", status: false },
    { id: 2, key: "sai saran", status: false },
    { id: 3, key: "Ruthvik", status: false },
    { id: 4, key: "Rahul krishna", status: false },
    { id: 5, key: "Harsik Reddy", status: false },
    { id: 6, key: "karthik bhat", status: false },
    { id: 7, key: "sonal ", status: false },
    { id: 8, key: "charith", status: false },
    { id: 9, key: "dhruva hegde", status: false },
    { id: 10, key: "John doe", status: false },
    { id: 11, key: "Jillian williams", status: false },
    { id: 12, key: "Jimmy carter", status: false },
    { id: 13, key: "emma watson", status: false },
  ]);

  const handlePress = (id) => {
    const selection = data.find((d) => d.id == id);
    if (selection.status == false) {
      setSelectionCount(selectionCount + 1);
    } else {
      setSelectionCount(selectionCount - 1);
    }
    const updatedData = data.map((d) =>
      d.id === id ? { ...d, status: !d.status } : d
    );
    setData(updatedData);
  };

  useEffect(() => {
    selectionCount == 5 ? setIsDisabled(false) : setIsDisabled(true);
  }, [selectionCount]);


  return (
    <>
      <View style={{...styles.appContainer, ...styles.Align}}>
        <Text style={styles.heading}>Select 5 Friends Names to Continue</Text>
      </View>
      <View style={styles.goalsContainer}>
        {data.map((item) => {
          return (
            <Pressable onPress={() => handlePress(item.id)}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: item.status ? "#98FB98" : "#FFFAFA" },
                ]}
                key={item.id}
              >
                <Text>{item.key}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
      {/* <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={isDisabled?["#808080"]:['#4c669f', '#3b5998', '#192f6a']}> */}
      <View style={styles.Align}>
        <TouchableOpacity
          style={{
            backgroundColor: isDisabled ? "#E6E6FA" : "#6495ED",
            borderRadius:10,
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginTop:25,
            alignItems: "center",
            justifyContent: "center",
            width: 110,
          }}
          disabled={isDisabled}
        >
          <Text style={{color: isDisabled ? "black" : "white"}}>CONTINUE({selectionCount}/5)</Text>
        </TouchableOpacity>
      </View>

      {/* </LinearGradient> */}
    </>
  );
}

const styles = StyleSheet.create({
  heading:{
    fontFamily:"sans-serif",
    fontSize:25,
    textAlign:"center",
    color:"#DC143C"
  },
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
  submitButton: {
    padding: 10,
    borderColor: "green",
    backgroundColor: "#17B169",
    borderWidth: 2,
    borderRadius: 10,
  },
  Align: {
    alignItems: "center",
    justifyContent: "center"
  }
});
