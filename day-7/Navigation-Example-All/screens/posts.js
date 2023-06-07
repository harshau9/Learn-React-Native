import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Posts = ({navigation}) => {
  return(<View>
    <Text style={styles.heading}>Posts Screen</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>)
}

export default Posts;

const styles = StyleSheet.create({
  heading : {
    textAlign:'center',
    fontSize:20
  }
})