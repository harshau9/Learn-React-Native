import React from 'react'
import {Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const GotoNotification = () => {
  
  const navigation = useNavigation();
  return(<Button 
            title="notification" 
            onPress={() => navigation.navigate('notification')}
        />)
}

export default GotoNotification;