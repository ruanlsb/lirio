import Topo from "./Topo";
import Rodape from "./Rodape";
import '../css/sobre.css'
function Sobre() {
    return (
        <>
        <Topo/>
        <div className='sobre'>
           
            <main>
                <div className="imgsobre">
                <img src="cuidados.jpg" alt="cuidados"  />
                </div>
            </main>
            </div>
           <Rodape/>
        </>
    )
}
export default Sobre;
