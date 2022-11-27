import Item from './Item'
const ItemList = (props) =>{
    return(
        <>
        {
            props.datos.map(item => <Item key={item.id} title ={item.title} src={item.src}/>)
        }
        </>
    )
}

export default ItemList