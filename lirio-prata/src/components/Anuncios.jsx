import React, {useState, useEffect} from "react";

function Anuncios(){
    const imagens = ['anuncios1.png','anuncios2.png', 'anuncios3.png'];
    const [indiceAtual, setIndiceAtual] = useState(0);
    useEffect(() => {
        const interval = setInterval(proximoSlide, 5000);

        return() => clearInterval(interval);
    }, []);
   
    const proximoSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
    };
    return(
        <div className="anc">
        <div className="titulo">
            <h1>SEJA BEM-VINDA</h1>
        </div>
        <div className="anun">
            <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1 }`}/>
        </div>
        </div>
    );
}
export default Anuncios;
