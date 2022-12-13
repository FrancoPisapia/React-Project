import { CartContext } from "./CartContex"
import { useContext } from "react"



const CartWidget = () =>{
    const contextoCart = useContext(CartContext);
   
    let productosEnCarro =(contextoCart.calcularTotalItems())
    /* let total = 0
    cartList.forEach(element => {
        console.log(total += element.cantidadItem )
        
    });*/
    return(
        <>
        {productosEnCarro !==0
        ?<div className='popup'>{productosEnCarro}</div>
        :<div></div>
        }
        </>
    )
}

export default CartWidget