// todos los componentes se crean dentro del src

import react from "@vitejs/plugin-react-swc"

function Card({usuario}){
    return(
    <div className="panel-control-card">
        <section>
            <p>Nombre:{usuario.nombre}</p>
            <p>Ciudad:{usuario.ciudad}</p>
            <p>Telefono:{usuario.telefono}</p>
        </section>
        <section>
            <p>Ver</p>
        </section>
    </div>
    )
}
export default Card