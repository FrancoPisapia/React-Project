
import CustomNav from './Componentes/CustomNav'
import  ItemListContainer from './Componentes/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/Nav.css';
import './style/ListaProductos.css'
import './style/productos.css'
import ItemDetailCointainer from './Componentes/ItemDetailCointainer'
const App = ()=>{
  return(
    <>
   <CustomNav />
    {/*< ItemListContainer greeting = 'Cambia tu forma de ver'/> */}
    <ItemDetailCointainer/>
    </>
    )
    
    
}

export default App;

