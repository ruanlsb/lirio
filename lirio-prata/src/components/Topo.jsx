import '../css/Topo.css'
import {Link} from 'react-router-dom'

function Topo() {
    return (
        <header>
        <div className='menu'>
            <div className='navbar'>
                
                <div className='logo'>
                    <Link to='/'><img src="logo-removebg-preview.png" alt="Logo" className='logotipo' /></Link>
                </div>
                <nav>
                    <ul>
                        <Link to='/'><li className='botao-menu'>HOME </li></Link>
                        <Link to='/produtos'><li className='botao-menu'>PRODUTOS </li></Link>
                        <Link to='ofertas'><li className='botao-menu'>OFERTAS </li></Link>
                        <Link to='sobre'><li className='botao-menu'>SOBRE </li></Link>
                        <Link to='contatos'><li className='botao-menu'>CONTATOS </li></Link>
                        
                    </ul>
                </nav>
            
            </div>
            <div className='login'>
                <img src="user.png" alt="user" className='loginUser'/>
                
                    <h5>
                        LOGIN
                    </h5>
                    <h6>
                        Cadastre
                    </h6>
                   
            </div>
        </div>
        </header>
    );
} export default Topo;
