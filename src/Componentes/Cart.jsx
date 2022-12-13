import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "./CartContex";
import Button from 'react-bootstrap/Button';

const Cart = () =>{
    const {cartList,borrarProducto,borrarTodo,calcTotalPrecioCadaItem,calcSubtotal} = useContext(CartContext);

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
            cartList.length === 0 
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
                    <div className="col-7">
                        <div className=" row letraCarrito">
                            <div className="col-12">
                            {item.title} 
                            </div>
                            <div className="col-12">
                            Cantidad: {item.cantidadItem} - Precio: $ {calcTotalPrecioCadaItem(item.id)}
                            </div>
                        </div>  
                    </div>
                    <div className="col-2">
                            <Button onClick={()=>borrarProducto(item.id)}>Borrar producto</Button>
                    </div> 
                </li>
            </div>
            <hr />
            </>
             
             ) 
           
        }


        {
            cartList.length > 0 &&
            <div className="contenderoTarjeta"> 
                <div className="tarjetaResumen">
                    <h3>Resumen de compra</h3>
                    <div className="row">
                        <div className="col-10">
                        <p> El precio total de tu compra es: </p>
                        </div>
                        <div className="col-2">
                        ${calcSubtotal()}
                        </div>
                        <div className="col-10">
                        <p>El precio del envío es: </p>
                        </div>
                        <div className="col-2">
                        ${ Math.round(calcSubtotal()*0.07)}
                        </div>
                        <div className="col-10">
                        <p> El precio total es: </p>
                        </div>
                        <div className="col-2">
                        ${calcSubtotal()*0.07+calcSubtotal()}
                        </div>
                    </div>
                    <div className="centrarBoton">
                    <Button className="col-6 "> Ir a pagar</Button>
                    </div>
                </div>
                
            </div>
            
        }
        </div>
    )
}

export default Cart