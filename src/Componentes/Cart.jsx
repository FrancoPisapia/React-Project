import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "./CartContex";
import Button from 'react-bootstrap/Button';

const Cart = () =>{
    const {cartList,borrarProducto,borrarTodo} = useContext(CartContext);

    return (
        <div className="container">
        <h1 >Tu compra</h1> 

        {
            cartList.length !==0
            ?
            <div className="row">
                <div className='col-6'>
                <Link to={'/'}><Button >Seguir Comprando</Button></Link> 
                </div>
                    <div className='col-6 aLaIzquierdaCart'>
                        <Button onClick={borrarTodo}>Borrar todos</Button>
                    </div>
    
             </div>
            :  <Button className="col-2 linkProducto"> <Link to= {'/'} className='linkProducto'> Ir al catalogo</Link></Button>
        }
        

        {
            cartList.length ===0 
            ? <div className="row m-2">
                <p className="col-12 letraCarrito">Tu carrito está vacio</p>
                </div>
            : cartList.map(item => 
            <>

            <div className="row">
                <li className="listaProductos" key={item.id} id={item.id}>
                    <div className="col-3">
                         <img className='tamañoFotoCarrito'src={item.src} alt={item.title} />
                    </div> 
                    <div className="col-7 letraCarrito">
                        {item.title}
                        cantidad: {item.cantidadItem} - Precio: $ {item.precio*item.cantidadItem}
                    </div>  
                    <div className="col-2">
                            <Button onClick={()=>borrarProducto(item.id)}>Borrar producto</Button>
                    </div> 
                </li>
            </div>
            <hr />
            
            </>) 

        }

        </div>
    )
}

export default Cart