import Card from "./Card"

function Contenido(){
    return(
    <section className="panel-control-section">
        {/*simpre dar una dependencia a la section con el nombre */}
        {/*BORRAMOS EL PANEL CONTROL CARD Y LO PASAMOS A PANEL CONTROL JSX*/}
       <Card/>
       <Card/>
       <Card/>
    </section>
    )
}
export default Contenido