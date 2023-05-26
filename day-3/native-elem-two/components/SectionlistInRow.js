import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, FlatList } from "react-native";

const DATA = [
  {
    category: "Mobile Phones",
    data: [{list:["Galaxy s22", "Xiomi 12 Pro", "I-Phone 15"]}]
  },
  {
    category: "Refrigerators",
    data: [{list:["Haier Single Door", "LG Double Door", "Godrej Single Door"]}]
  },
  {
    category: "Dresses",
    data: [{list:["Lymio Multi Color", "Toplot Black Dress", "Keri Perry"]}]
  },
];

const SectionlistInRow = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => < FlatList horizontal data={item.list} renderItem={({item})=><Text style={styles.item}>{item}</Text>}/>}
      renderSectionHeader={({ section: { category } }) => (
        <Text style={styles.header}>{category}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#006666",
    padding: 20,
    marginVertical: 8,
    flexDirection:'row',
    margin:10
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  }
});

export default SectionlistInRow;