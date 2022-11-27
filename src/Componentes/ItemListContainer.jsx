import {useState, useEffect} from 'react';
import ItemList from './ItemList'
import fetchData from '../utils/fetchData'
import {data} from '../utils/data'

const ItemListContainer = (prop) =>{

    const [datos, setDatos] = useState ([])



    //ComponentDidMount
    useEffect(()=>{
        //Consulta a la Base de dats
        fetchData (2000, data)
            .then(response => setDatos(response))
            .catch(err => console.log(err))
    },[])


    return(
        <>
        <h1 className="container">{prop.greeting}</h1>
        <div className='container'>
            <div className='row separacionTarjetas'>
                <ItemList datos={datos} />
            </div>
        </div>
        {/*<ul className="listaProductos">
        <li className="">{prop.producto1}</li>
        <li>{prop.producto2}</li>
        <li>{prop.producto3}</li>
        <li>{prop.producto4}</li>
        </ul>*/}
        </>
    )
}


export default  ItemListContainer;