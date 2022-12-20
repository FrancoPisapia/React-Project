import {useState, useEffect} from 'react';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import {fetchFromFirestore} from '../utils/firebaseFetch'

const ItemListContainer = (prop) =>{

    const [datos, setDatos] = useState ([])
    const {idCategoria} = useParams()

    //componentDidUpdate
    useEffect(()=>{

    fetchFromFirestore(idCategoria)
        .then(result => setDatos(result))
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