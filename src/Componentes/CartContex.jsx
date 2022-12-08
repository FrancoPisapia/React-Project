import { createContext,useState } from "react";

export const CartContext = createContext();



const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState ([])

    const agregarAlCarrito = (item, cantidad) =>{
        setCartList([...cartList,
        {
            id: item.id,
            title: item.title,
            precio: item.precio,
            cantidad: cantidad,
        }
        ])
    }

    const borrarProducto = (id) =>{
        const nuevoArray = cartList.filter(item => item.id !== id)
        setCartList (nuevoArray)
    }

    return(
        <CartContext.Provider value={{cartList, agregarAlCarrito, borrarProducto}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider