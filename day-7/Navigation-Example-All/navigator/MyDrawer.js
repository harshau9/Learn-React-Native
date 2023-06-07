import React from "react";
import { Feeds, Terms, About } from "../screens";
import { Linking, Text, View } from "react-native";
import { AntDesign } from "react-native-vector-icons";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import MyTab from "./MyTab";

const Drawer = createDrawerNavigator();

const CustomDrawerComponent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={({ color }) => (
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="book" color={color} size={24} />
            <Text style={{ color: color }}> About</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate("about")}
      />
      <DrawerItem
        label="Masai School"
        onPress={() => {
          Linking.canOpenURL("https://www.masaischool.com/")
            .then(() => {
              Linking.openURL("https://www.masaischool.com/");
            })
            .catch((e) => {
              alert("Can't open Masai School");
            });
        }}
      />
    </DrawerContentScrollView>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
    >
      <Drawer.Screen
        name="home3"
        component={MyTab}
        options={{ title: "My App" }}
      />
      <Drawer.Screen name="feeds" component={Feeds} />
      <Drawer.Screen name="terms" component={Terms} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
