import React from 'react';
import './Pilares.scss';
import iconoDiseno from '../../assets/ux-ui.jpg';
import iconoProducto from '../../assets/diseno-producto.jpg';
import iconoFrontend from '../../assets/frontend.jpg';
import iconoConsultoria from '../../assets/consultoria.jpg';

const Pilares = () => {
  const pilares = [
      {
      imagen: iconoProducto,
      titulo: "Diseño de Producto Digital",
      descripcion: "Aportamos visión estratégica para definir y dar forma a productos digitales desde cero, o mejorar los que ya existen. Nos involucramos en cada etapa: desde el descubrimiento hasta las iteraciones posteriores al lanzamiento."
    },
    {
      imagen: iconoDiseno,
      titulo: "Diseño UX/UI",
      descripcion: "Investigamos, prototipamos y diseñamos interfaces que equilibran usabilidad, estética y objetivos del negocio. Cada decisión se basa en comprender a fondo a las personas que usarán el producto."
    },
    {
      imagen: iconoFrontend,
      titulo: "Desarrollo de Frontend",
      descripcion: "Convertimos diseños en experiencias reales, funcionales y bien construidas. Trabajamos con tecnologías modernas para asegurar calidad, rendimiento y escalabilidad."
    },
    {
      imagen: iconoConsultoria,
      titulo: "Consultoría y Acompañamiento",
      descripcion: "Asesoramos a equipos internos en procesos de diseño, toma de decisiones, implementación de sistemas de diseño y mejoras continuas. Actuamos como apoyo estratégico para alinear visión, equipo y ejecución."
    }
  ];

  return (
    <section className="pilares">
      <h2 className="pilares__titulo">Nuestros Servicios</h2>
      <p className="pilares__intro">Diseñamos y desarrollamos productos digitales centrados en las personas. Acompañamos a empresas, organizaciones y equipos desde la definición estratégica hasta la implementación final.</p>
      
      <div className="pilares__grid">
        {pilares.map((pilar, index) => (
          <article key={index} className="pilar">
            <div className="pilar__imagen-container">
              <img 
                src={pilar.imagen} 
                alt={pilar.titulo}
                className="pilar__imagen"
              />
            </div>
            <div className="pilar__contenido">
              <h3 className="pilar__titulo">{pilar.titulo}</h3>
              <p className="pilar__descripcion">{pilar.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pilares;