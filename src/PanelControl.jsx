//function PanelControl(){}
import './PanelControl.css';
const PanelControl =() =>{
    return (
        <section className="panel-control">
            <aside className="panel-control-aside">
                <div>
                    <img src="" alt ="Logo"/>
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
            <section className="panel-control-section">
                //simpre dar una dependencia a la section con el nombre 
                <div className="panel-control-card">
                    <section></section>
                    <section>
                        <p>Ver</p>
                    </section>
                </div>
                <div className="panel-control-card"> 
                    <section></section>
                    <section>
                        <p>Ver</p>
                    </section>
                </div>
                <div className="panel-control-card">
                    <section></section>
                    <section>
                        <p>Ver</p>
                    </section>
                </div>
            </section>
        </section>
    )
    }
export default PanelControl