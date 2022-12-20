
import { collection, getDocs,query,where,doc, getDoc  } from "firebase/firestore";
import {db} from '../utils/firebaseCinfig';

export const fetchFromFirestore = async(idCategoria) =>{
    //Tengo que ver para hacer el filtro que tengo en la query y en la URL. Para eso aplico un if y luego un wherepara hacer un filtro.
    let q;
    if (idCategoria){
        q = query (collection(db,'productos'),where ('categoria','==', idCategoria))
    } else { //Undefined (cuando quiero ver todos los productos)
        q = query (collection(db,'productos'))
    }
    //querySnapshot es un array especial de Firestore. Es un array de documentos pero no puedo usarlo para setDatos. Porque no puede ser leido. Lo debemos refactorizar. Se usa el método docs para convertirlo en array de objetos
const querySnapshot = await getDocs(q);
const dataFromFirestore = querySnapshot.docs.map(item => ({
    id: item.id,
    ...item.data()
}))
return dataFromFirestore;
}

export const fetchOneFromFireStore = async(id) =>{
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    return{
        id: id,
        ...docSnap.data()
    }
    } else {
        // doc.data() will be undefined in this case
    console.log("No se encuetr");
    }
        }