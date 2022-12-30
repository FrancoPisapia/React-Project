
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/Nav.css';
import './style/ListaProductos.css'
import './style/productos.css'
import './style/Cart.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailCointainer from "./Componentes/ItemDetailCointainer";
import ItemListContainer from "./Componentes/ItemListContainer";
import CustomNav from "./Componentes/CustomNav";
import Cart from './Componentes/Cart'
import  CartContextProvider from './Componentes/CartContex';
import Login from './Componentes/Login'
import Register from './Componentes/Register'
import './style/registrarse.css'

const App = ()=>{
  return(
    <>
     <CartContextProvider>
            <BrowserRouter>
                <CustomNav />
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting = 'Cambia tu forma de ver'/>} />
                    <Route path='/category/:idCategoria' element={<ItemListContainer greeting = 'Cambia tu forma de ver' />} />
                    <Route path='/item/:id' element={<ItemDetailCointainer greeting = 'Cambia tu forma de ver' />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    </>
    )
    
    
}

export default App;

