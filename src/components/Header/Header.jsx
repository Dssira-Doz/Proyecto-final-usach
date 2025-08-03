import React from 'react';
import './Header.scss';
import logo from '../../assets/Agrita.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__column header__column--logo">
          <a href="/" className="header__logo-link">
            <img src={logo} alt="Logo" className="header__logo-image" />
          </a>
        </div>
        
        <nav className="header__column header__column--nav">
          <ul className="header__list">
            <li className="header__item"><a href="#" className="header__link">Home</a></li>
            <li className="header__item"><a href="#" className="header__link">Servicios</a></li>
            <li className="header__item"><a href="#" className="header__link">Proyectos</a></li>
            <li className="header__item"><a href="#" className="header__link">Nosotros</a></li>
            <li className="header__item"><a href="#" className="header__link">Blog</a></li>
            <li className="header__item"><a href="#" className="header__link">Contáctanos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;