
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/Nav.css';
import './style/ListaProductos.css'
import './style/productos.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailCointainer from "./Componentes/ItemDetailCointainer";
import ItemListContainer from "./Componentes/ItemListContainer";
import CustomNav from "./Componentes/CustomNav";

const App = ()=>{
  return(
    <>
        <BrowserRouter>
            <CustomNav />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting = 'Cambia tu forma de ver'/>} />
                <Route path='/category/:idCategoria' element={<ItemListContainer greeting = 'Cambia tu forma de ver' />} />
                <Route path='/item/:id' element={<ItemDetailCointainer greeting = 'Cambia tu forma de ver' />} />
            </Routes>
        </BrowserRouter>
    </>
    )
    
    
}

export default App;

