import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link} from "react-router-dom";

const Item = (props) =>{
    //La prop se convierte en item cuando lo lleva  ItemList; el props.Datos se convierte en Datos.Datos cuando lo lleva a ItemListContainer
    return(
        <Card  className='cardAumentada' style={{ width: '18rem' }}>
          <div className='imagenCentrada'>
        <Card.Img variant="top"  className='tamañoFoto' src={props.src} />
          </div>
         <Card.Body>
        <Card.Title>{props.title} </Card.Title>
        <Button variant="primary"> <Link to ={`/item/${props.id}`} className = 'linkProducto' >Ver Producto</Link></Button>
      </Card.Body>
        </Card>

    )
}

export default Item;