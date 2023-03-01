import {  ScrollView, StyleSheet, Text, View,Image} from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import { colors } from './Values'

var texto="Café de especialidad tostado artesanalmente con finos granos selectos de Veracruz, México."+
"\n\t   °  Garnica Café de 84 puntos SCA"+
"\n\t   °  Rodolfo Jiménez"+
"\n\t   °  Espinal, Naolinco, Veracruz"+
"\n\t   °  1200 msnm"+
"\n\t   °  Proceso Lavado"+
"\n\t   °  Notas a naranja, piloncillo y chocolate"

const Detalle = () => {
  const picker=useRef();
  function open(){
    picker.current.focus();
  }
  function close(){
    picker.current.blur();
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
        <Image source={require('../assets/logo-catando-ando-coffee.png')}/>
        <Image source={require('../assets/cafe1.png')}/>
        <Text style={styles.Titulo}>Café Garnica - Espinal Veracruz</Text>
        <Text>$ 180.00 MXN</Text>
        <Picker selectedValue={'1'} ref={picker} style={{backgroundColor:colors.darkCoffee}}>
          <Picker.Item label='1 Kg' value={'1'}/>
          <Picker.Item label='1 Lb' value={'2'}/>
          <Picker.Item label='250 g' value={'3'}/>
        </Picker>
        <Text style={styles.contenido}>{texto}</Text>
        
      
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Detalle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    pading:3
  },
  Titulo:{
    fontSize:20,
    fontWeight:'bold'
  },
  contenido:{
    fontSize:15
  }
})