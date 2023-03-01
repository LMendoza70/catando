import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Confirmation = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  const navigation=useNavigation();

  const validateCode = () => {
    // Validate the code against your database or API
    if (code === '1234') {
      setIsCodeValid(true);
      setErrorMessage('');
    } else {
      setIsCodeValid(false);
      setErrorMessage('Código inválido');
    }
  };

  const updatePassword = () => {
    if (newPassword === confirmPassword) {
      // Update the password in your database or API
      setErrorMessage('Contraseña actualizada');
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1500);
    } else {
      setErrorMessage('Las contraseñas no coinciden');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingrese el código</Text>
      <TextInput
        value={code} style={styles.input}
        onChangeText={(text) => setCode(text)}
      />
      <Button title="Validar código" onPress={validateCode}  color='#943d36'/>
      {errorMessage && <Text>{errorMessage}</Text>}
      {isCodeValid && (
        <View>
          <Text>Ingrese la nueva contraseña</Text>
          <TextInput
            value={newPassword} style={styles.input}
            onChangeText={(text) => setNewPassword(text)}
            secureTextEntry
          />
          <Text>Confirme la nueva contraseña</Text>
          <TextInput
            value={confirmPassword} style={styles.input}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
          />
          <Button title="Actualizar contraseña" onPress={updatePassword} color='#943d36'/>
        </View>
      )}
    </View>
  );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
      },
      title: {
        fontSize: 24,
        marginBottom: 16,
      },
      input: {
        width: '80%',
        height: 40,
        padding: 8,
        borderWidth: 1,
        borderColor: 'gray',
        marginVertical: 8,
      },
})

export default Confirmation;
