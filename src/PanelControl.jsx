//function PanelControl(){}

import Contenido from './Contenido';/* cuando tenemos la palabrita export se agragara automaticamente se hara la importacion automatica*/ 
import MenuLateral from './MenuLateral';/* recuerda se agregara automaticamente una vez lo ponga abajo */ 
import './PanelControl.css';


/* ojo la importacion por default no necesita llaves aqui arriba */
/*simpre asegurarse que la carperta public y asset esten en la razi de la principak*/
const PanelControl =() =>{

   
    return (
        <section className="panel-control">
            <MenuLateral/>
            <Contenido/>
            {/*trata de repetir este menu lateral para que veas un mejor entendido   */}
  
        </section>
    )
    }
export default PanelControl     