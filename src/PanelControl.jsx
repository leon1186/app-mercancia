//function PanelControl(){}

import Contenido from './Contenido';/* cuando tenemos la palabrita export se agragara automaticamente se hara la importacion automatica*/ 
import MenuLateral from './MenuLateral';/* recuerda se agregara automaticamente una vez lo ponga abajo */ 
import './PanelControl.css';
const PanelControl =() =>{
    return (
        <section className="panel-control">
            <MenuLateral/>
            <Contenido/>
            
  
        </section>
    )
    }
export default PanelControl