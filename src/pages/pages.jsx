import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailCointainer from "../Componentes/ItemDetailCointainer";
import ItemListContainer from "../Componentes/ItemListContainer";
import CustomNav from "../Componentes/CustomNav";

const Home = () => {
    return (
        <BrowserRouter>
            <CustomNav />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting = 'Cambia tu forma de ver'/>} />
                <Route path='/category/:idCategoria' element={<ItemListContainer greeting = 'Cambia tu forma de ver' />} />
                <Route path='/item/:id' element={<ItemDetailCointainer greeting = 'Cambia tu forma de ver' />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Home;