import { useContext } from "react"
import { CartContext } from "./CartContex"

const Cart = () =>{
    const {cartList,borrarProducto} = useContext(CartContext);

    return (
        <>
        <h1 className="container">Soy el carrito</h1> 
        {
            cartList.length ===0 
            ? <div><p>Tu carrito esta vacio</p> <button>Ir al catalogo</button></div>
            :cartList.map(item => <li key={item.id} id={item.id}>{item.title}- cantidad: {item.cantidad}- <button onClick={()=>borrarProducto(item.id)}>Borrar producto</button> </li> )

        }

        </>
    )
}

export default Cart