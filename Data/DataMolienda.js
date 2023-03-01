import { addDoc, collection } from "firebase/firestore";
import { db } from "./Coneccion";

export const addMolienda=(objeto)=>{
    addDoc(collection(db,'molienda'),{
        descripcion:objeto.descripcion
    })
}