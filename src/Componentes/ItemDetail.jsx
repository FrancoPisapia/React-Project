import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

const ItemDetail = ({item}) =>{

    const [irAlCarrito,setIrAlCarrito] = useState(false);

    const onAdd = () =>{
        setIrAlCarrito(true)
    }
    return(


        <>
          <div className="container mt-5" key={item.id}>
                <div className="row">
                    <div className="col-lg-8 centradoImagenDetail">
                <img className="tamañoFotoPagina" src={item.src} alt={item.colorDelArmazon}/>
                    </div>
                    <div className="col-lg-4 esteticaTarjeta mt-5">
                        <div>
                            <h3>{item.title} </h3>
                        </div>
                        <div className="letras">
                           <span className="negrita"> Marca: </span>{item.marca} 
                         </div>
                        <div className="letras">
                            <span className="negrita">Estilo: </span>{item.estilo}  
                        </div>
                        <div className="letras">
                            <span className="negrita"> Color del armazón:</span> {item.colorDelArmazon}  
                        </div>
                        <div className="letras">
                            <span className="negrita">Material:</span> {item.material}  
                        </div>
                        <div className="letras">
                            <span className="negrita">  Precio: </span>${item.precio}
                        </div>
                        <div className='enLinea'>
                        {
                            irAlCarrito ?
                            <Button > <Link to={'/cart'}  className = 'linkProducto'> Ir al Carrito</Link></Button>
                            :<ItemCount onAdd={onAdd}/>
                        }
                        </div>
                    </div>
                </div>
            </div>

        {/*
            props.dato.map(item => 
            <div className="container mt-5" key={item.id}>
                <div className="row">
                    <div className="col-8 centradoImagenDetai">
                <img className="tamañoFotoPagina" src={item.src} alt={item.colorDelArmazon}/>
                    </div>
                    <div className="col-4 centradoDetalles">
                        <div>
                            <h1>{item.title} </h1>
                        </div>
                        <div>
                            {item.marca} 
                         </div>
                         <div>
                            {item.categoria}  
                        </div>
                        <div>
                            {item.estilo}  
                        </div>
                        <div>
                            {item.colorDelArmazon}  
                        </div>
                        <div>
                            ${item.precio}
                        </div>
                    </div>
                </div>
            </div>)
            */}
        </>
    )
}

export default ItemDetail