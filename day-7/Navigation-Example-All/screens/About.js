import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const About = ({navigation}) => {
  return(<View>
    <Text style={styles.heading}>About Screen</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>)
}

export default About;

const styles = StyleSheet.create({
  heading : {
    textAlign:'center',
    fontSize:20
  }
})