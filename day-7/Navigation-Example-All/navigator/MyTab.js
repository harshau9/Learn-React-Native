import React from 'react'
import {Home, About, Notifications, Posts} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, Entypo} from '@expo/vector-icons'
import MyStack from './MyStack'

const BottomTab = createBottomTabNavigator();

const MyTab = () => {
  return(<BottomTab.Navigator
  
    screenOptions={{
      headerShown: false,
tabBarActiveTintColor:"black",
          tabBarInactiveTintColor:"#808080"      
    }}
  >
    <BottomTab.Screen name="home" component={Home} 
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({color, size}) => 
          <Ionicons name="home" color={color} size={size} />
      }}
    />
    <BottomTab.Screen name="posts" component={Posts} 
      options={{
        tabBarLabel: "Posts",
        tabBarIcon: ({color, size}) => 
          <Entypo name="news" color={color} size={size} />
      }}    
    />
    <BottomTab.Screen name="notification" component={Notifications} 
      options={{
        tabBarLabel: "Notifications",
        tabBarIcon: ({color, size}) => 
          <Entypo name="bell" color={color} size={size} />
      }}
    
    />    
  </BottomTab.Navigator>)
}

export default MyTab;