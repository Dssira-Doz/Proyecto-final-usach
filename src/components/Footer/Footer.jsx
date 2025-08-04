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
              <li className="footer__item"><a href="#Home" className="footer__link">Home</a></li>
              <li className="footer__item"><a href="#Servicios" className="footer__link">Servicios</a></li>
              <li className="footer__item"><a href="#Proyectos" className="footer__link">Proyectos</a></li>
              <li className="footer__item"><a href="#Nosotros" className="footer__link">Nosotros</a></li>
              <li className="footer__item"><a href="#Blog" className="footer__link">Blog</a></li>
            </ul>
          </div>

          <div className="footer__contact col-4 col-t-6 col-m-12">
            <h3 className="footer__title">Contacto</h3>
            <ul className="footer__list">
              <li className="footer__item"><a href='#' className= "footer__link">Email: contacto@ejemplo.com</a></li>
              <li className="footer__item"><a href='#' className= "footer__link">Teléfono: +123 456 789</a></li>
              <li className="footer__item">
                <div className="footer__social">
                  <a href="#" className="footer__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/></svg> Instagram</a>
                  <a href="#" className="footer__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg> LinkedIn</a>
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