import {useState, useEffect} from 'react';
import ItemDetail from '../Componentes/ItemDetail';
import { useParams } from "react-router";
import {fetchOneFromFireStore} from '../utils/firebaseFetch'


const ItemDetailCointainer = ({greeting}) =>{

    const [dato, setDato] = useState ({})
    const { id } = useParams();

    useEffect(()=>{

            fetchOneFromFireStore(id)
            .then(result => setDato(result))
            .catch(err => console.log(err))

    },[id])


    return(

        <div className='container'>
            <h1>{greeting}</h1>
            <ItemDetail item ={dato}/>
        </div>
)
           
}

export default ItemDetailCointainer 
