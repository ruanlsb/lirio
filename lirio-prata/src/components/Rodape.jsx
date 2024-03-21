import '../css/Rodape.css'
import SocialLinks from "./SocialLinks.jsx";

function Rodape(){
    return (
        <footer>
        <div className="rdp">
           
            <div className="direitos">    
               <br /> <h3>Copyright Lírio Prata - 2024. Todos os direitos reservados.</h3>
            </div>
            <div className="social">
                <p>SIGA A LIRIO</p>
                <SocialLinks/>
            </div>
        </div>
        </footer>
    );
}
export default Rodape;
