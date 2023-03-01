import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from './Values'

const Stack2=createNativeStackNavigator();

const Home = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../assets/logo-catando-ando-coffee.png')} style={styles.logo}/>
      <Text style={styles.Titulo}>CAFE DE ESPECIALIDAD MEXICANO</Text>
      <View style={styles.card}>
        <Image source={require('../assets/luis.png')} style={styles.foto}/>
        <Text style={styles.texto}>Seleccionamos y ofrecemos, para nuestros visitantes, 
          finos granos mexicanos de café de especialidad, cultivado en Veracruz y tostado artesanalmente 
          por el galardonado experto Luis Murillo.</Text>
      </View>
      
      <ScrollView horizontal>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Detalle')}>
          <Image source={require('../assets/cafe1.png')} style={styles.foto}/>
          <Text>Café Garnica - Espinal Veracruz</Text>
          <Text>Desde $180.00 MXN </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/cafe2.png')} style={styles.foto}/>
          <Text>Café Garnica - Espinal Veracruz</Text>
          <Text>Desde $180.00 MXN </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/cafe-3.png')} style={styles.foto}/>
          <Text>Café Garnica - Espinal Veracruz</Text>
          <Text>Desde $180.00 MXN </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{flexDirection:'row',justifyContent:'space-around',alignSelf:'stretch',padding:10}}>
        <Ionicons name='logo-facebook' size={25} color={colors.darkCoffee}/>
        <Ionicons name='logo-twitter' size={25} color={colors.darkCoffee}/>
        <Ionicons name='logo-instagram' size={25} color={colors.darkCoffee}/>
        <Ionicons name='logo-youtube' size={25} color={colors.darkCoffee}/>
      </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.cream
      },
      card:{
        flexDirection:'column',
        borderColor:colors.lightGreen,
        borderWidth:2,
        borderRadius:10,
        backgroundColor:colors.cream,
        paddingTop:5,
        marginBottom:25,
        marginHorizontal:10
      },
      Titulo:{
        fontSize:25,
        color:colors.darkCoffee,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:30,
        shadowColor: colors.lightGreen,
        shadowOpacity: 50,
        shadowRadius: 5,
        shadowOffset: { width: 20, height: 20 }
      },
      texto:{
        fontSize:15,
        color:colors.darkCoffee,
        fontWeight:'bold',
        textAlign:'justify',
        marginHorizontal:10,
        marginBottom:30,
        shadowColor: colors.darkGreen,
        shadowOpacity: 50,
        shadowRadius: 5,
        shadowOffset: { width: 20, height: 20 }
      },
      foto:{
        width: 200,
        height: 200,
        borderRadius: 100,
        shadowColor: colors.darkGreen,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignSelf:'center'
      },
      logo:{
        height:60,
        width:160,
        padding:5,
        margin:15
      }

})