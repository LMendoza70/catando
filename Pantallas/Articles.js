import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerGestureContext } from '@react-navigation/drawer'
const funcion=(x)=>{
  if(true){
    Alert.alert('holA')
  }else{
    Alert.alert('ok')
  }

}
const Articles = () => {
  return (
    <View style={styles.container}>
      <Text>Articles</Text>
      <Text>Practica Fech clima</Text>
      
    </View>
  )
}

export default Articles

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#fff'
    },
})