import React from 'react';
import Logo from '../assets/img/logo.svg';
import '../styles/header.css';


function Header() {
  return (
    <header>
      <img src={Logo} alt="Snap Packing" />
      <div>
        <a>Produto</a>
        <a>Funcionalidades</a>
        <a>Preços</a>
        <a>Contato</a>
      </div>
    </header>
  );
}

export default Header;