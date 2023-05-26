import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Pressable,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";

const Scroll = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const addItem = () => {
    setData((prev) => [...prev, "item " + Math.ceil(Math.random() * 100)]);
  };
  const onRefresh = () => {
    setRefreshing(true);
    setData([]);
    setRefreshing(false);
  };
  return (
    <View style={styles.container} horizontal>
      <Button title="Add Item" onPress={addItem} />
      <Text style={styles.heading}>List of Items</Text>
      <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["red"]}
          tintColor="green"
        />
      }
      >
        {data.map((item) => (
          <Text style={styles.item}>{item}</Text>
        ))}
        {data.length == 0 && (
          <Text style={{ textAlign: "center" }}>No Items in List</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Scroll;

const styles = StyleSheet.create({
    container: {
    marginTop: 30,
    flex: 1,

    borderWidth: 2,
  },
  item: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
