import { useNavigation } from '@react-navigation/native';
import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { addUsuario } from '../Data/DataUsuarios';
import {colors} from '../Pantallas/Values'
import * as Yup from 'yup';

const Registro = () => {
  const [message, setmessage] = useState('');
  const navigation=useNavigation();

  const {handleChange,handleSubmit,values,handleBlur,errors,touched}=useFormik({
    validationSchema:validacion,
    initialValues:{nombre:'',aPaterno:'',aMaterno:'',email:'',password:''},
    onSubmit:values=>{
      const objeto={
        nombre:values.nombre,
        aPaterno:values.aPaterno,
        aMaterno:values.aMaterno,
        email:values.email,
        password:values.password
      }
      addUsuario(objeto)
      setTimeout(() => {
        navigation.navigate('Login');
    }, 1500);
    setmessage('Registro Exitoso...')
    }
  })

  const validacion=Yup.object().shape({
    nombre:Yup.string().required('Campo requerido').min(3,'minimo 3 caracteres'),
    email:Yup.string().email('Email no valido').required('Campo requerido'),
    aPaterno:Yup.string().required('Campo requerido').min(3,'minimo 3 caracteres'),
    aMaterno:Yup.string().required('Campo requerido').min(3,'minimo 3 caracteres'),
    password:Yup.string().min(6,'minimo caracteres').max(10,'Maximo 10 caracteres').required('Campo requerido')
  })

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registro de Nuevo Usuario</Text>
  
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={handleChange('nombre')}
        onBlur={handleBlur('nombre')}
        error={errors.nombre}
        touched={touched.nombre}
      />
  
      <TextInput
        style={styles.input}
        placeholder="Apellido Paterno"
        onChangeText={handleChange('aPaterno')}
        onBlur={handleBlur('aPaterno')}
        error={errors.aPaterno}
        touched={touched.aPaterno}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido Materno"
        onChangeText={handleChange('aMaterno')}
        onBlur={handleBlur('aMaterno')}
        error={errors.aMaterno}
        touched={touched.aMaterno}
      />
  
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        error={errors.email}
        touched={touched.email}
      />
  
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        error={errors.password}
        touched={touched.password}
      />
  
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
  
      <Text style={styles.header}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor:colors.cream
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 16,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#943d36',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Registro;
