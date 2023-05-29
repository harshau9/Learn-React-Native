import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const readData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
        if(value){
            return value
        }else{
            return null
        }
    } catch(e) {
      console.log("Unable to read Data", e)
    }
  }

export default readData
