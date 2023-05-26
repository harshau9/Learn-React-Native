import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView,View } from 'react-native';
import SectionListExample from './components/SectionlistExample';
import SectionlistInRow from './components/SectionlistInRow';
import FlatlistExample from './components/FlatlistExample';
import IconsPack from './components/Icons';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <IconsPack/>
    // </View>
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Flat List props</Text>
      <FlatlistExample/>
      <Text style={styles.text}>Section List In Columns(default)</Text>
      <SectionListExample/>
      <Text style={styles.text}>Section List In Rows</Text>
      <SectionlistInRow/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
  },
  text:{
    fontSize:25,
    color:"red"
  }
});
