import React from 'react';
import './Footer.scss';
import logo from '../../assets/AgritaLogo500.png';

const Footer = () => {
  return (
    <footer className="footer container-full">
      <div className="container">
        <div className="footer__content grid-12">
          <div className="footer__logo col-4 col-t-12 col-m-12">
            <img src={logo} alt="Logo" className="footer__logo-image" />
          </div>
          
          <div className="footer__nav col-4 col-t-6 col-m-12">
            <h3 className="footer__title">Enlaces</h3>
            <ul className="footer__list">
              <li className="footer__item"><a href="/inicio" className="footer__link">Home</a></li>
              <li className="footer__item"><a href="/servicios" className="footer__link">Servicios</a></li>
              <li className="footer__item"><a href="/proyectos" className="footer__link">Proyectos</a></li>
              <li className="footer__item"><a href="/nosotros" className="footer__link">Nosotros</a></li>
              <li className="footer__item"><a href="/blog" className="footer__link">Blog</a></li>
            </ul>
          </div>

          <div className="footer__contact col-4 col-t-6 col-m-12">
            <h3 className="footer__title">Contacto</h3>
            <ul className="footer__list">
              <li className="footer__item">Email: contacto@ejemplo.com</li>
              <li className="footer__item">Teléfono: +123 456 789</li>
              <li className="footer__item">
                <div className="footer__social">
                  <a href="#" className="footer__social-link">Instagram</a>
                  <a href="#" className="footer__social-link">LinkedIn</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__copyright col-12">
          <p>© {new Date().getFullYear()} Agria Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;