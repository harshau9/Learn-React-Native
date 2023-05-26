import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Scroll from "./components/Scrollview";
import LongPressOnImageToDelete from "./components/LongPressOnImageToDelete";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Scroll />
      {/* <LongPressOnImageToDelete/> */}
    </View>
  );
}
