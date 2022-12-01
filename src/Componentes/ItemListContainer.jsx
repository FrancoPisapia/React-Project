import {useState, useEffect} from 'react';
import ItemList from './ItemList'
import fetchData from '../utils/fetchData'
import {data} from '../utils/data' 
import { useParams } from 'react-router-dom';

const ItemListContainer = (prop) =>{

    const [datos, setDatos] = useState ([])
    const {idCategoria} = useParams()

    //componentDidUpdate
    useEffect(()=>{
        //Consulta a la Base de dats
        fetchData (2000, data.filter(item =>{
            if(idCategoria === undefined) return item;
            return item.categoria === (idCategoria)
        }))
            .then(response => setDatos(response))
            .catch(err => console.log(err))
    },[idCategoria])


    return(
        <>
        <h1 className="container">{prop.greeting}</h1>
        <div className='container'>
            <div className='row separacionTarjetas'>
                <ItemList datos={datos} />
            </div>
        </div>
        </>
    )
}


export default  ItemListContainer;