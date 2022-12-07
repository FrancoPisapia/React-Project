
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/Nav.css';
import './style/ListaProductos.css'
import './style/productos.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailCointainer from "./Componentes/ItemDetailCointainer";
import ItemListContainer from "./Componentes/ItemListContainer";
import CustomNav from "./Componentes/CustomNav";
import Cart from './Componentes/Cart'

const App = ()=>{
  return(
    <>
        <BrowserRouter>
            <CustomNav />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting = 'Cambia tu forma de ver'/>} />
                <Route path='/category/:idCategoria' element={<ItemListContainer greeting = 'Cambia tu forma de ver' />} />
                <Route path='/item/:id' element={<ItemDetailCointainer greeting = 'Cambia tu forma de ver' />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </>
    )
    
    
}

export default App;

