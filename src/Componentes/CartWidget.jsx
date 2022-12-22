import { CartContext } from "./CartContex";
import { useContext } from "react";



const CartWidget = () =>{
    const {calcularTotalItems} = useContext(CartContext)
    let productosEnCarro =(calcularTotalItems())

    return(
        <>
        {productosEnCarro !==0
        ?<div className='popup'>{productosEnCarro}</div>
        :<div></div>
        }
        </>
    )
}

export default CartWidget;