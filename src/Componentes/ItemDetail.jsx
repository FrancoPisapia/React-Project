
const ItemDetail = ({item}) =>{
    return(


        <>
          <div className="container mt-5" key={item.id}>
                <div className="row">
                    <div className="col-8 centradoImagenDetai">
                <img className="tamañoFotoPagina" src={item.src} alt={item.colorDelArmazon}/>
                    </div>
                    <div className="col-4 esteticaTarjeta">
                        <div>
                            <h3>{item.title} </h3>
                        </div>
                        <div className="letras">
                            {item.marca} 
                         </div>
                        <div className="letras">
                            {item.estilo}  
                        </div>
                        <div className="letras">
                            {item.colorDelArmazon}  
                        </div>
                        <div className="letras">
                            ${item.precio}
                        </div>
                    </div>
                </div>
            </div>

        {/*
            props.dato.map(item => 
            <div className="container mt-5" key={item.id}>
                <div className="row">
                    <div className="col-8 centradoImagenDetai">
                <img className="tamañoFotoPagina" src={item.src} alt={item.colorDelArmazon}/>
                    </div>
                    <div className="col-4 centradoDetalles">
                        <div>
                            <h1>{item.title} </h1>
                        </div>
                        <div>
                            {item.marca} 
                         </div>
                         <div>
                            {item.categoria}  
                        </div>
                        <div>
                            {item.estilo}  
                        </div>
                        <div>
                            {item.colorDelArmazon}  
                        </div>
                        <div>
                            ${item.precio}
                        </div>
                    </div>
                </div>
            </div>)
            */}
        </>
    )
}

export default ItemDetail