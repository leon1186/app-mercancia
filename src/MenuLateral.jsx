
import logouser from './assets/1202.jpg'; /* crear una ruta relativa punto slash / import logouser es simplemente algo relativo*/

function MenuLateral(){
    return(
        <aside className="panel-control-aside">
            <div>
                <img src={logouser} alt ="Logo"/>
            </div>
            <nav>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </aside>
    )
}
export default MenuLateral
/* aqui tengo el return y la exportacion*/


