import '../css/Galeria.css'
import Slideshow from "./Slideshow.jsx";
import Anuncios from "./Anuncios.jsx";

function Galeria(){
    return (
        <main>
        <div className='galeria'>
        <div className='lateral'>
            <img src="lirio.png" className='imglateral' />
        </div>
            <Anuncios/>
            <Slideshow/>
        </div>
        </main>
    );
}
export default Galeria;