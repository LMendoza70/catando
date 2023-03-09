import { Fontisto, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { addMolienda } from './Data/DataMolienda';
import Articles from './Pantallas/Articles';
import Confirmation from './Pantallas/Confirmation';
import Detalle from './Pantallas/Detalle';
import Home from './Pantallas/Home';
import Login from './Pantallas/Login';
import Recuperar from './Pantallas/Recuperar';
import Registro from './Pantallas/Registro';
import Shop from './Pantallas/Shop';
import { colors } from './Pantallas/Values';

const Stack =createNativeStackNavigator();
const Tab=createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <MisStack/>
    </NavigationContainer>
  );
}

const MisStack=()=>{
  return(
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Recovery' component={Recuperar} options={{headerShown:false}}/>
        <Stack.Screen name='Confirm' component={Confirmation} options={{headerShown:false}}/>
        <Stack.Screen name='Registro' component={Registro} options={{headerShown:false}}/>
        <Stack.Screen name='Homei' component={MisTabs} options={{headerShown:false}}/>
      </Stack.Navigator>
  )
}

const Stackh=createNativeStackNavigator();
const StackHome=()=>{
  return(
    <Stackh.Navigator>
      <Stackh.Screen name='Homeh' component={Home} options={{headerShown:false}}/>
      <Stackh.Screen name='Detalle' component={Detalle} options={{headerShown:false}}/>
    </Stackh.Navigator>
  )
}

const MisTabs=()=>{
  return(
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:colors.lightCoffee,tabBarStyle:{backgroundColor:colors.darkCoffee}}}>
      <Tab.Screen name='Home' component={StackHome} options={{tabBarIcon:()=><Ionicons name='home' size={25} color={colors.lightCoffee} />, headerShown:false}} />
      <Tab.Screen name='Shop' component={Shop} options={{tabBarIcon:()=><Ionicons name='cash-outline' size={25} color={colors.lightCoffee}/>, headerShown:false}}/>
      <Tab.Screen name='Articles' component={Articles} options={{tabBarIcon:()=><Ionicons name='book-outline' size={25} color={colors.lightCoffee}/>,headerShown:false}}/>
    </Tab.Navigator>
  )
}



const SplashScreen=()=>{
  const navigation=useNavigation();

  useEffect(()=>{
    //saddMolienda({descripcion:"Moka pot"})
    const timer =setTimeout(()=>{
      navigation.reset({
        index:0,
        routes:[{name:'Login'}]
      })
    },2000)
    return ()=>clearTimeout(timer)
  },[navigation])

  return(
    <View style={styles.container}>
      <Fontisto name='coffeescript' size={200} color={colors.darkCoffee}/>
      <Text>CatandoAndo.coffee</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor:colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
