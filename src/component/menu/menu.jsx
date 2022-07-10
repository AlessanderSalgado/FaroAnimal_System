import React from 'react';
import Logo from '../../images/logo/logo_branca.png'
import './style/menu.css';
const Menu = () => {

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
                        <li><a href="/">Iniciar Atendimento</a></li>
                        <li><a href="/">Consultar Atendimentos</a></li>
                        <li><a href="/">Portfólio</a></li>
                        <li><a href="/">Contato</a></li>
                    </ul>
                    <button onClick={toggleMenu} aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
                        <span id="hamburger"></span>
                    </button>
                </nav>
                <a id="logo" href="http://localhost:3000/">
                <img id="img_logo" alt='' src={Logo}></img></a>
            </div>
            <div id="user_logout">
                <a id="user" href="http://localhost:3000/">User: Alessander</a>
                <a id="sair" href="http://localhost:3000/">Sair</a>
            </div>
        </header>
        </>
    )
}


export default Menu;