import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero__overlay">
            <div className="hero__content">
                <h1 className="hero__title">Proyectos a medida con criterio y claridad</h1>
                <p className="hero__subtitle">En <strong>Agria Studio</strong> diseñamos productos y experiencias con foco en lo esencial, respetando a las personas, el negocio y su contexto. <strong>Creamos soluciones pensadas, no improvisadas.</strong></p>
                <a href="#Contacto" className='hero__cta'>Conversemos sobre tu proyecto</a>
            </div>
        </div>
    </section>
  );
};

export default Hero;