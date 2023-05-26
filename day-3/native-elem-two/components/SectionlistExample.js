import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
  {
    category: "Mobile Phones",
    data: ["Galaxy s22", "Xiomi 12 Pro", "I-Phone 15"]
  },
  {
    category: "Refrigerators",
    data: ["Haier Single Door", "LG Double Door", "Godrej Single Door"]
  },
  {
    category: "Dresses",
    data: ["Lymio Multi Color", "Toplot Black Dress", "Keri Perry"]
  },
];

const SectionListExample = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <View style={styles.item}>
                                  <Text style={styles.title}>{item}</Text>
                                </View>}
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
    flexDirection:'row'
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default SectionListExample;