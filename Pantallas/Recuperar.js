import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, ActivityIndicator} from 'react-native';
//import { sendRecoveryCode } from './api'; // Aquí debes importar tu función de envío de correo electrónico.

const Recuperar = () => {
  const navigation=useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    navigation.navigate('Confirm')
    /*try {
      const recoveryCode = await sendRecoveryCode(email);
      setError(null);
      // Aquí debes navegar a la siguiente pantalla y pasar el código de recuperación como prop.
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }*/
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail}
        placeholder="Email" keyboardType="email-address" autoCapitalize="none"
        autoCorrect={false}/>

      {error && <Text style={styles.error}>{error}</Text>}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Enviar Código" onPress={handleSubmit} color='#943d36' />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  error: {
    color: 'red',
    marginTop: 8,
  },
});

export default Recuperar