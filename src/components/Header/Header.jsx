import React from 'react';
import './Header.scss';
import logo from '../../assets/AgritaLogo.png';

const Header = () => {
  return (
    <header className="header container-full">
      <div className="container">
        <div className="header__content grid-12">
          <div className="header__logo col-3 col-t-2 col-m-12">
            <img src={logo} alt="Logo" className="header__logo-image" />
          </div>
          <nav className="header__nav col-9 col-t-6 col-m-12">
            <ul className="header__list">
              <li className="header__item"><a href="#" className="header__link">Home</a></li>
              <li className="header__item"><a href="#" className="header__link">Servicios</a></li>
              <li className="header__item"><a href="#" className="header__link">Proyectos</a></li>
              <li className="header__item"><a href="#" className="header__link">Nosotros</a></li>
              <li className="header__item"><a href="#" className="header__link">Blog</a></li>
              <li className="header__item"><a href="#" className="header__link">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;