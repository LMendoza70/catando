import { StyleSheet } from "react-native";

const colors = {
    darkCoffee: '#4A2C2A',
    lightCoffee: '#A8927B',
    cream: '#F1E7D2',
    darkGreen: '#41624F',
    lightGreen: '#C4D9C4',
  };

  const Estilos= StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:colors.cream
    },
    header: {
      fontSize: 24,
      marginBottom: 16,
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
    },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor:colors.lightGreen,
      padding: 8,
      marginBottom: 16,
    },
    button: {
      backgroundColor:colors.darkCoffee,
      padding: 12,
      width: '80%',
    },
    buttonText: {
      color:colors.lightGreen,
      fontSize: 18,
      textAlign: 'center',
    }    
  })

  export {colors,Estilos}