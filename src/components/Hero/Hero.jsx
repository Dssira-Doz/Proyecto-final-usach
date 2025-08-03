import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero_overlay">
            <div className="hero_content">
                <h1 className="hero-title">Proyectos a medida con criterio y claridad</h1>
                <p className="hero-subtitle">En <strong>Agria Studio</strong> diseñamos productos y experiencias con foco en lo esencial, respetando a las personas, el negocio y su contexto. <strong>Creamos soluciones pensadas, no improvisadas.</strong></p>
                <a href="#contacto" className='hero_cta'>Conversémos sobre tu proyecto</a>
            </div>
        </div>
    </section>
  );
};

export default Hero;