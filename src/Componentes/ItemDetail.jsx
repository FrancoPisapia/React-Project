
const ItemDetail = (props) =>{
    return(


        <>
        {
            props.datos.map(item => 
            <div className="container mt-5" key={item.id}>
                <div className="row">
                    <div className="col-8 centradoImagenDetai">
                <img className="tamañoFotoPagina" src={item.src} alt={item.coolorDelArmazon}/>
                    </div>
                    <div className="col-4 centradoDetalles">
                        <div>
                            {item.title} 
                        </div>
                        <div>
                            {item.marca} 
                         </div>
                         <div>
                            {item.tipo}  
                        </div>
                        <div>
                            ${item.precio}
                        </div>
                    </div>
                </div>
            </div>)
        }
        </>
    )
}

export default ItemDetail