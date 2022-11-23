
import CustomNav from './Componentes/CustomNav'
import  ItemListContainer from './Componentes/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/Nav.css';
import './style/ListaProductos.css'
const App = ()=>{
  return(
    <>
   <CustomNav />
    {/*< ItemListContainer producto1 = 'Armazón Vintage' producto2 = 'Armazón Moretti ' producto3 = 'Lentes de sol Vintahr' producto4= 'Lentes de contacto Air Optix'/>*/}
    < ItemListContainer greeting = 'Cambia tu forma de ver'/>
    </>
    )
    
    
}

export default App;

