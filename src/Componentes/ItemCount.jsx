import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { FiPlus,FiMinus } from "react-icons/fi";

const ItemCount =({ stock=0,initial =1, onAdd}) =>{

    const [count, setCount] = useState (0);

    //componentDidMount
    useEffect(() => {
        setCount(initial);
    },[]);

    const aumentar = () =>{
        if (count<stock){
            setCount (count+1)
        }
    }

    const disminuir = () =>{
        if (count>initial+1){
            setCount (count-1)
        }
    }



    return(
        <>
        <Button onClick={disminuir}><FiMinus/></Button>
        <h5 className='textoCentrado'>{count}</h5>
        <Button onClick={aumentar}><FiPlus/></Button>
        {
            count && stock
            ?<Button onClick={() => onAdd(count)} >Agregar al carrito</Button>
            :<Button disabled onClick={() => onAdd(count)} >Agregar al carrito</Button>
        }
        

        

        
        </>
    )


}

export default ItemCount