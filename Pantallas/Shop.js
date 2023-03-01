import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { colors, Estilos } from './Values'
import { db } from '../Data/Coneccion'
import { collection, getDoc, getDocs } from 'firebase/firestore'

const Shop = () => {
  const [procuctoslist, setprocuctoslist] = useState([])
  const [load,setLoad]=useState(false)  
  
  const loadproductos=async ()=>{
    const coleccion= collection(db,'producto')
    const consulta=await getDocs(coleccion)
    const productos=[]

    for(const item of consulta.docs) {
      const datositem=item.data()
      const refv=datositem.variedad
      const refp=datositem.presentacion
      const docv= await getDoc(refv)
      const docp= await getDoc(refp)
      const datav=docv.data()
      const datap=docp.data()

      productos.push({
        id:item.id,
        nombre:datav.nombre,
        precio:datositem.precio,
        presentacion:datap.descripcion,
        descripcion:datav.descripcion
      })
    }
    setprocuctoslist(productos)
    setLoad(true)
  }

  useEffect(() => {
    loadproductos()
    setTimeout(() => {
      console.log(procuctoslist)  
    }, 500);
    
  }, [])
  

  if(load==true){
    return (
      <View style={Estilos.container}>
        <Text>Productos{procuctoslist.length}</Text>
        <FlatList
        renderItem={RenderItem}
        data={procuctoslist}
        keyExtractor={(item)=>item.id}/>
      </View>
    )
  }else{
    return(
      <View style={Estilos.container}>
        <ActivityIndicator size={'large'}/>
        <Text style={Estilos.texto}>Cargando Datos...</Text>
      </View>
    )
  }
}

const RenderItem=({item})=>{
  return(
  <TouchableOpacity style={{borderWidth:2,borderColor:colors.darkGreen,borderRadius:5,padding:8}}>
    <Image source={require('../assets/cafe1.png')} style={{width:70,height:70}}/>
    <Text>Nombre : {item.nombre}</Text>
    <Text>Precio : ${item.precio}.00</Text>
  </TouchableOpacity>
  )
}

export default Shop