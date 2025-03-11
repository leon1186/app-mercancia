import Card from "./Card"
import usuarios from "./database"


function Contenido({}){
    
    return(
        
    <section className="panel-control-section">

        {
            usuarios.map((usuario)=>{
                return<Card usuario={usuario}/>
            }) 
        }
        
        
        {/* el callback puede ser llamadao otra cosa como index etc {esto arriba seria el callback }*/ }
        {/*simpre dar una dependencia a la section con el nombre */}
        {/*BORRAMOS EL PANEL CONTROL CARD Y LO PASAMOS A PANEL CONTROL JSX*/}
       {/*<Card nombre={nombre} ciudad={ciudad} telefono={telefono}/>{/*por medio de una prop le voy a mandar una info. nombre seria el prop */}
       {/*<Card/>
       <Card/>*/}
    </section>
    )
}
export default Contenido