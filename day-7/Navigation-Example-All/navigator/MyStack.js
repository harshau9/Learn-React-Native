import React from 'react'
import {Home, About, Notifications} from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './MyTab'
import MyDrawer from './MyDrawer'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return(<Stack.Navigator>
    <Stack.Screen name="home1" component={MyDrawer} 
      options={{ title:"My App", headerShown:false}}
    />
    <Stack.Screen name="about" component={About} 
      options={{title:"About Screen"}}
    />
  </Stack.Navigator>)
}

export default MyStack;