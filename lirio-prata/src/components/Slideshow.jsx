import React, {useState, } from "react";




function Slideshow(){


    const imagens = ['slideshow1.png', 'slideshow2.png', 'slideshow3.png'];
    const [indiceAtual, setIndiceAtual] = useState(0);


    const proximoSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
    };


    const voltarSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
    };


    return(
        <div className="slide">
            <div className="titulocat">
                <h2>CATEGORIAS</h2>
            </div>
            <div className="categoria">
                <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1 }`} className="cat"/>
            </div>
            <div className="btn">
                <button onClick={proximoSlide}> PROXIMO </button>
            </div>
       
        </div>
    );
}
export default Slideshow;
