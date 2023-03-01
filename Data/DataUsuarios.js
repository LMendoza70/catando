import { async } from "@firebase/util"
import { addDoc, collection} from "firebase/firestore"
import { db } from "./Coneccion"

export const addUsuario=(user)=>{
    addDoc(collection(db,'Usuarios'),{
        nombre:user.nombre,
        aPaterno:user.aPaterno,
        aMaterno:user.aMaterno,
        email:user.email,
        password:user.password
    }
    )
}

export const getUser= async (mail)=>{
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
      return(usuarios)
    }catch(error){
      console.log('***'+error+'***')
    }
  }