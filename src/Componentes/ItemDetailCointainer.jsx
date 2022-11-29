import {useState, useEffect} from 'react';
import fetchData from '../utils/fetchData'
import {data} from '../utils/data'
import ItemDetail from '../Componentes/ItemDetail'

const ItemDetailCointainer = (props) =>{

    const [datos, setDatos] = useState ([])


    useEffect(()=>{
        //Consulta a la Base de dats
        fetchData (2000, data)
            .then(response => setDatos(response))
            .catch(err => console.log(err))
    },[])


    return(

        <div className='container'>
            <ItemDetail datos ={datos}/>
        </div>
)
           
}

export default ItemDetailCointainer 
