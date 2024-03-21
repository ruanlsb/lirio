import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Sobre from "./components/Sobre.jsx";
import Contatos from "./components/Contatos.jsx";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
                <Route path="/contato" element={<Contatos/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;