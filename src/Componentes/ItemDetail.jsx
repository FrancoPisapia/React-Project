import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContex';

const ItemDetail = ({item}) =>{

    const [irAlCarrito,setIrAlCarrito] = useState(false);
    const{agregarAlCarrito} = useContext(CartContext)

    const onAdd = (cantidad) =>{
        //alert(`Se agregaron ${cantidad} de unidades`)
        setIrAlCarrito(true)
        //Ejecutar la funcion global para agregar el producto al carrito
        agregarAlCarrito (item,cantidad);

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
                        <div className="letras">
                            <span className="negrita">  Stock: </span>{item.stock}
                        </div>
                        <div className='enLinea'>
                        {
                            irAlCarrito ?
                            <Button > <Link to={'/cart'}  className = 'linkProducto'> Ir al Carrito</Link></Button>
                            :<ItemCount stock={item.stock} initial={irAlCarrito} onAdd={onAdd}/>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail