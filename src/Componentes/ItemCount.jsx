import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { FiPlus,FiMinus } from "react-icons/fi";
const ItemCount =() =>{

    const [count, setCount] = useState (0);

    const initial =0
    //componentDidMount
    useEffect(() => {
        setCount(initial);
    },[]);

    const aumentar = () =>{
        if (count>=0){
            setCount (count+1)
        }
    }

    const disminuir = () =>{
        if (count>0){
            setCount (count-1)
        }
    }

    return(
        <>
        <Button onClick={disminuir}><FiMinus/></Button>
        <h5 className='textoCentrado'>{count}</h5>
        <Button onClick={aumentar}><FiPlus/></Button>
        <Button >Agregar al carrito</Button>
        </>
    )


}

export default ItemCount