import * as React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home! {route.params?.name} </Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate("Home", { name: "This is the param" })
        }
      />
    </View>
  );
}

const Screen2 = () => {
  return <Text>Screen2</Text>;
};

const Screen3 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen3</Text>
      <TouchableOpacity onPress={() => navigation.navigate("screen4")}>
        <Text>Navigate to Screen 4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("screen5")}>
        <Text>Navigate to Screen 5</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen4 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen4</Text>
      <TouchableOpacity onPress={() => navigation.navigate("screen5")}>
        <Text>Navigate to Screen 5</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen5 = () => {
  return <Text>Screen5</Text>;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="screen2" component={Screen2} />
      <Tab.Screen name="screen3" component={Screen3} />
    </Tab.Navigator>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={MyTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="screen4" component={Screen4} />
      <Stack.Screen name="screen5" component={Screen5} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
