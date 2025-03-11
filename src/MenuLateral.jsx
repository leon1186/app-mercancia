
import logouser from './assets/1202.jpg'; /* crear una ruta relativa punto slash / import logouser es simplemente algo relativo*/
/*pero en realidad que hago primero donde exactamente anadira el codigo para trabjar de manera eficiente 
ojo! primero importamos arriba, lo llamamos y despues le ponemos la variable como logouser */
function MenuLateral(){
    return(
        <aside className="panel-control-aside">
            <div>
                <img src={logouser} alt ="Logo"/>
            </div>
            <nav>
                <ul>
                    <li>CLIENTE</li>
                    <li>USUARIO</li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </aside>
    )
}
export default MenuLateral
/* aqui tengo el return y la exportacion*/


