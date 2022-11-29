
const ItemDetail = (props) =>{
    return(


        <>
        {
            props.datos.map(seleccion => 
            <div>
                {seleccion.title} {seleccion.marca} {seleccion.tipo} <img src={seleccion.src} alt={seleccion.coolorDelArmazon}/> ${seleccion.precio}
            </div>)
        }
        </>
    )
}

export default ItemDetail