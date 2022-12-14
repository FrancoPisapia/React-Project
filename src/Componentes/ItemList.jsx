import Item from './Item'
import Spinner from 'react-bootstrap/Spinner';
const ItemList = (props) =>{
    return(
        <>
        {
            props.datos.length>0
            ?props.datos.map(item => <Item key={item.id}  id={item.id} title ={item.title} src={item.src}/>)
            :<div className='centado'> <Spinner animation="border" variant="primary" /></div>
        }
        </>
    )
}

export default ItemList