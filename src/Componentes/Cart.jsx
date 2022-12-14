import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "./CartContex";
import Button from 'react-bootstrap/Button';

const Cart = () =>{
    //const {cartList,borrarProducto,borrarTodo,calcTotalPrecioCadaItem,calcSubtotal} = useContext(CartContext);
    const contextoCart = useContext(CartContext);
    return (
        <div className="container">
        <h1 >Tu compra</h1> 

        {
            contextoCart.cartList.length !==0
            ?
            <div className="row">
                <div className='col-6'>
                <Link to={'/'}><Button >Seguir Comprando</Button></Link> 
                </div>
                    <div className='col-6 aLaIzquierdaCart'>
                        <Button onClick={contextoCart.borrarTodo}>Borrar todos</Button>
                    </div>
    
             </div>
            :  <Button className="col-lg-2 col-4 linkProducto"> <Link to= {'/'} className='linkProducto'> Ir al catalogo</Link></Button>
        }
        

        {
            contextoCart.cartList.length === 0 
            ? <div className="row m-2">
                <p className="col-12 letraCarrito">Tu carrito está vacio</p>
                </div>
            : contextoCart.cartList.map(item => 
            <>

            <div className="row">
                <li className="listaProductos" key={item.id} id={item.id}>
                    <div className="col-lg-3 col-2">
                         <img className='tamañoFotoCarrito'src={item.src} alt={item.title} />
                    </div> 
                    <div className="col-lg-7 col-7">
                        <div className=" row letraCarrito">
                            <div className="col-12">
                            {item.title} 
                            </div>
                            <div className="col-12">
                            Cantidad: {item.cantidadItem} - Precio: $ {contextoCart.calcTotalPrecioCadaItem(item.id)}
                            </div>
                        </div>  
                    </div>
                    <div className="col-lg-2 col-3">
                            <Button onClick={()=>contextoCart.borrarProducto(item.id)}>Borrar producto</Button>
                    </div> 
                </li>
            </div>
            <hr />
            </>
             
             ) 
           
        }


        {
            contextoCart.cartList.length > 0 &&
            <div className="contenderoTarjeta"> 
                <div className="tarjetaResumen">
                    <h3 className="m-2">Resumen de compra</h3>
                    <div className="row m-3">
                        <div className="col-10">
                        <p> El precio total de tu compra es: </p>
                        </div>
                        <div className="col-2">
                        ${contextoCart.calcSubtotal()}
                        </div>
                        <div className="col-10">
                        <p>El precio del envío es: </p>
                        </div>
                        <div className="col-2">
                        ${ Math.round(contextoCart.calcSubtotal()*0.07)}
                        </div>
                        <div className="col-10">
                        <p> El precio total es: </p>
                        </div>
                        <div className="col-2">
                        ${contextoCart.calcSubtotal()*0.07+contextoCart.calcSubtotal()}
                        </div>
                    </div>
                    <div className="centrarBoton mb-2">
                    <Button className="col-6 "> Ir a pagar</Button>
                    </div>
                </div>
                
            </div>
            
        }
        </div>
    )
}

export default Cart