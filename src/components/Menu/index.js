import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './Menu.css';
import Button from '../Button';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo"
                    src={Logo} alt="AluraFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;