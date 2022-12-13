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
            productoRepetido.cantidadItem += cantidad;
            setCartList([...cartList])
        }
    }

    const borrarProducto = (id) =>{
        const nuevoArray = cartList.filter(item => item.id !== id)
        setCartList (nuevoArray)
    }

    const borrarTodo = () =>{
        setCartList([])
    }

    const calcularTotalItems = () =>{
        let cantidad = cartList.map (item => item.cantidadItem);
        return cantidad.reduce(((valorAnterior, valorActual) => valorAnterior + valorActual), 0);
    }

    const calcTotalPrecioCadaItem = (id)=>{
        let totalCadaItem = cartList.map(item => item.id).indexOf(id);
        //console.log (cartList[totalCadaItem])
        return cartList[totalCadaItem].precio*cartList[totalCadaItem].cantidadItem
    }

    const calcSubtotal = () =>{
        let totalCadaItem = cartList.map(item => calcTotalPrecioCadaItem(item.id));
        return totalCadaItem.reduce((valorAnterior, valorActual) =>
        valorAnterior + valorActual)
    }


    return(
        <CartContext.Provider value={{cartList, agregarAlCarrito, borrarProducto,borrarTodo,calcularTotalItems,calcTotalPrecioCadaItem ,calcSubtotal  }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider