import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import GotoNotification from '../components/GotoNotification'

const Home = ({navigation}) => {
  return(<View>
    <Text style={styles.heading}>Home Screen</Text>
    <Button title="About" onPress={() => navigation.navigate('about')}/>
    <View style={{marginTop:10}}>
    <GotoNotification navigation={navigation}/>
    </View>
  </View>)
}

export default Home;

const styles = StyleSheet.create({
  heading : {
    textAlign:'center',
    fontSize:20
  }
})