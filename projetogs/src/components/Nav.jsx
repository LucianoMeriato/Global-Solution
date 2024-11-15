import React from 'react';
import { NavStyle } from '../css/NavStyle';

const Nav = () => {
    return (
        <NavStyle>
            <header>
                <div className="nav container">
                    {/* Logo e Nome */}
                    <a href="#home" className="logo"><i className='bx bx-sun'></i> Energia Limpa</a>

                    
                    <input type="checkbox" id="menu" />
                    <label htmlFor="menu">
                        <i className='bx bx-menu' id="menu-icon"></i>
                    </label>

                    {/* Links de navegação */}
                    <ul className="navbar">
                        <li><a href="#home">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#solucao">Soluções</a></li> 
                        <li><a href="#Projetos">Projetos</a></li> 
                    </ul>

                    {/* Botão de Ação */}
                    <a href="/junte-se" className="btn">Login</a>
                </div>
            </header>
        </NavStyle>
    );
};

export default Nav;
