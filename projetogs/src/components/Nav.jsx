import { Link, NavLink } from 'react-router-dom';
import { NavStyle } from '../css/NavStyle';

const Nav = () => {
    return (
        <NavStyle>
            <header>
                <div className="nav container">
                    <Link to="/" className="logo">
                        <i className='bx bx-home'></i> Energy
                    </Link>

                    <input type="checkbox" id="menu" />
                    <label htmlFor="menu">
                        <i className='bx bx-menu' id="menu-icon"></i>
                    </label>

                    <ul className="navbar">
                        <li>
                            <NavLink to="/" activeClassName="active">Início</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre" activeClassName="active">Sobre</NavLink>
                        </li>
                        <li>
                            <NavLink to="/solucao" activeClassName="active">Solução</NavLink> 
                        </li>
                    </ul>

                    <div className="auth-links">
                        <Link to="/login" className="btn">Log In</Link>
                        <Link to="/cadastrar" className="btn">Cadastro</Link>
                    </div>
                </div>
            </header>
        </NavStyle>
    );
};

export default Nav;
