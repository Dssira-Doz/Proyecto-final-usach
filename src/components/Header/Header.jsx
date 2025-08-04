import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/AgritaLogo500.png';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false); //useState maneja el estado del menú abierto o cerrado
  const toggleMenu = () => { // Función para alternar el estado del menú abierto o cerrado. Cambia el estado de isOpen al valor contrario
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); //Cierra el menú al hacer clic en un enlace en dispositivos móviles
  }
  
  return (
    <header className="header container-full">
      <div className="container">
        <div className="header__content grid-12">
          <div className="header__logo col-3 col-t-2 col-m-12">
            <img src={logo} alt="Logo" className="header__logo-image" />
          </div>

          {/*Botón menú de hamburguesa*/}
          <button
          className={`header__toggle col-m-2 ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span className="header__bar"></span>
            <span className="header__bar"></span>
            <span className="header__bar"></span>
          
          </button>
          {/*Menú de navegación*/}
          <nav className={`header__nav col-9 col-t-6 col-m-12 ${isOpen ? 'open' : ''}`}>
            <ul className="header__list">
              <li className="header__item"><a href="#Home" className="header__link" onClick={handleLinkClick}>Home</a></li>
              <li className="header__item"><a href="#Servicios" className="header__link" onClick={handleLinkClick}>Servicios</a></li>
              <li className="header__item"><a href="#Proyectos" className="header__link"onClick={handleLinkClick}>Proyectos</a></li>
              <li className="header__item"><a href="#Nosotros" className="header__link" onClick={handleLinkClick}>Nosotros</a></li>
              <li className="header__item"><a href="#Blog" className="header__link" onClick={handleLinkClick}>Blog</a></li>
              <li className="header__item"><a href="#Contacto" className="header__link" onClick={handleLinkClick}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;