import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = (props) =>{
    //La prop se convierte en item cuando lo lleva  ItemList; el props.Datos se convierte en Datos.Datos cuando lo lleva a ItemListContainer
    return(
        <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top"  className='tamañoFoto' src={props.src} />
         <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary">Ver Producto</Button>
      </Card.Body>
        </Card>

    )
}

export default Item 