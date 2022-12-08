import { createContext,useState } from "react";

export const CartContext = createContext();



const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState ([])

    const agregarAlCarrito = (item, cantidad) =>{

        const productoRepetido = cartList.find(producto => producto.id === item.id);
        if (productoRepetido=== undefined){

            setCartList([...cartList,
            {
                id: item.id,
                title: item.title,
                precio: item.precio,
                src: item.src,
                cantidadItem: cantidad
                
            }
            ])
        } else {
            productoRepetido.cantidadItem += cantidad
        }
    }

    const borrarProducto = (id) =>{
        const nuevoArray = cartList.filter(item => item.id !== id)
        setCartList (nuevoArray)
    }

    const borrarTodo = () =>{
        setCartList([])
    }


    return(
        <CartContext.Provider value={{cartList, agregarAlCarrito, borrarProducto,borrarTodo}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider