import {useState, useEffect} from 'react';
import fetchData from '../utils/fetchData'
import ItemDetail from '../Componentes/ItemDetail';
import { useParams } from "react-router";
const {data} = require ('../utils/data');


const ItemDetailCointainer = ({greeting}) =>{

    const [dato, setDato] = useState ({})
    const { idItem } = useParams();

    useEffect(()=>{
        //Consulta a la Base de dats
        fetchData (2000, data.find (item=> item.id == idItem))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    },[idItem])


    return(

        <div className='container'>
            <h1>{greeting}</h1>
            <ItemDetail item ={dato}/>
        </div>
)
           
}

export default ItemDetailCointainer 
