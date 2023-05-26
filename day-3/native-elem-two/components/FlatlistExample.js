import React, {useState} from 'react'
import {View, Text, StyleSheet, RefreshControl, FlatList} from 'react-native'

const FlatlistExample = () => {
  const [data, setData] = useState([])
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true) ;
    setData(prev => [...prev, 'Task no: '+Math.ceil(Math.random()*100)]);
    setRefreshing(false);
  }
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>List of Tasks</Text>
      <FlatList
      refreshControl={<RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh} 
          colors={['red']} 
          tintColor='green' />}
      data={data}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      keyExtractor={(_, index) => index.toString() }
      numColumns={2}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      ListHeaderComponent={() => <Text style={{textAlign:'center'}}>This is header of FlatList</Text>}
      ListFooterComponent={() => <Text  style={{textAlign:'center'}}>This is footer of FlatList</Text>}
      ListEmptyComponent={() => <Text style={{textAlign:'center'}}>No Items in list</Text>}

      />
  </View>)
}

export default FlatlistExample;

const styles = StyleSheet.create({
  container :{
    marginTop: 30
  },
  item : {
    flex:1,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#006666',
    padding:5,
    margin:5,
  },
  heading : {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center'
  },
  separator:{
    flex:1,
    borderColor:'#006666',
    borderBottomWidth:2,
    margin:10
  }
})