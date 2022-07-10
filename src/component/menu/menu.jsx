import React, {useState} from 'react';
import Logo from '../../images/logo/logo_branca.png'
import Lupa from '../../images/icons/lupa_animada.png'
import './style/menu.css';
const Menu = () => {
    // eslint-disable-next-line
    const [listaMenu, setListaMenu] = useState(['Atendimento','Cadastros','Financeiro','Usuarios']);

    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
    }

    return(
        <>
        <header id="header">
            <div id="menu_logo">
                <nav id="nav">
                    <ul id="menu" role="menu">
                        <li>
                            <div id='div-busca-menu'>
                                <input type='text' id='input-busca-menu' placeholder="Buscar..."/>
                                <img id='img-busca-menu' src={Lupa} alt=""/>
                            </div>
                        </li>
                        {listaMenu.map((menuName,i)=>{
                            return <li key={i}><a href='/'>{menuName}</a></li>
                        })}
                    </ul>
                    <button onClick={toggleMenu} aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
                        <span id="hamburger"></span>
                    </button>
                </nav>
                <a id="logo" href="/">
                <img id="img_logo" alt='' src={Logo}></img></a>
            </div>
            <div id="user_logout">
                <a id="user" href="/">User: Alessander</a>
                <a id="sair" href="/">Sair</a>
            </div>
        </header>
        </>
    )
}


export default Menu;