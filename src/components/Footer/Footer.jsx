import React from 'react';
import './Footer.scss';
import logo from '../../assets/Agrita.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column footer__column--logo">
          <img src={logo} alt="Logo" className="footer__logo" />
        </div>

        <div className="footer__column footer__column--nav">
          <ul className="footer__list">
            <li className="footer__item"><a href="/inicio" className="footer__link">Home</a></li>
            <li className="footer__item"><a href="/nosotros" className="footer__link">Servicios</a></li>
            <li className="footer__item"><a href="/proyectos" className="footer__link">Proyectos</a></li>
            <li className="footer__item"><a href="/servicios" className="footer__link">Nosotros</a></li>
            <li className="footer__item"><a href="/blog" className="footer__link">Blog</a></li>
            <li className="footer__item"><a href="/contacto" className="footer__link">Contacto</a></li>
          </ul>
        </div>


        <div className="footer__column footer__column--contact">
          <h3 className="footer__title">Contacto</h3>
          <ul className="footer__list">
            <li className="footer__item"><span className="footer__text">Email: contacto@ejemplo.com</span></li>
            <li className="footer__item"><span className="footer__text">Teléfono: +123 456 789</span></li>
            <li className="footer__item">
              <div className="footer__social">
                <a href="#" className="footer__social-link">Instagram</a>
                <a href="#" className="footer__social-link">LinkedIn</a>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <div className="footer__copyright">
        <p>© {new Date().getFullYear()} Agria Studio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;