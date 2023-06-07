import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Notifications = () => {
  return(<View>
    <Text style={styles.heading}>Notifications Screen</Text>
  </View>)
}

export default Notifications;

const styles = StyleSheet.create({
  heading : {
    textAlign:'center',
    fontSize:20
  }
})