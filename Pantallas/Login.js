import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {colors, Estilos} from './Values'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Data/Coneccion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation=useNavigation();
  const [UsuariosList, setUsuariosList] = useState([]);
  

  const getUser= async (mail)=>{
    try{
      const usuarios=[];
      const coleccion =collection(db,'Usuarios');
      const consulta=query(coleccion,where('email','==',mail));
      const respuesta=await getDocs(consulta);
      
      respuesta.forEach(element => {
        usuarios.push({
          id:element.id,
          nombre:element.data().nombre,
          aPaterno:element.data().aPaterno,
          aMaterno:element.data().aMaterno,
          email:element.data().email,
          password:element.data().password
        })
      });
      setUsuariosList(usuarios)
    }catch(error){
      console.log('***'+error+'***')
    }
  }

  const loguea=(correo)=>{
    getUser(correo)
    if(UsuariosList.length==0){
      alert('el usuario no existe')
    }else if(UsuariosList[0].password==password){
      navigation.navigate('Homei')
    }else{
      alert('Password incorrecto')
    }
  }

  return (
    <View style={Estilos.container}>
      <Fontisto name='coffeescript' size={100} color={colors.darkCoffee} style={{marginBottom:15}}/>
      <Text style={Estilos.header}>Iniciar sesión</Text>
      <TextInput
        style={Estilos.input}
        placeholder="Correo electrónico"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={Estilos.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={Estilos.button} onPress={()=>loguea(email)} >
        <Text style={Estilos.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Registro')}>
        <Text style={Estilos.texto}>Registrate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Recovery')}>
        <Text style={Estilos.texto}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Login;
