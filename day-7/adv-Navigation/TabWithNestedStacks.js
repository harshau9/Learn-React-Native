import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function DetailsScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details_stack')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home_Stack" component={HomeScreen} />
      <HomeStack.Screen name="Details_stack" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen1} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const NewScreen = () => {
  return(<View>
    <Text>New Tab Screen</Text>
  </View>)
}

const NewScreenStack = createNativeStackNavigator();
const NewStackScreen = () => {
  return(<NewScreenStack.Navigator>
    <NewScreenStack.Screen name="NewScreen" component={NewScreen} />
  </NewScreenStack.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home_Tab" component={HomeStackScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Settings_Tab" component={SettingsStackScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="NewScreen" component={NewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}