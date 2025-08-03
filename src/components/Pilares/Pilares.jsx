import React from 'react';
import './Pilares.scss';

// Importa tus imágenes (ajusta las rutas)
import iconoDiseno from '../../assets/ux-ui.jpg';
import iconoDesarrollo from '../../assets/frontend.jpg';
import iconoProducto from '../../assets/diseno-producto.jpg';
import iconoConsultoria from '../../assets/consultoria.jpg';

const Pilares = () => {
  const pilares = [
    {
      imagen: iconoDesarrollo,
      titulo: "Desarrollo Frontend",
      descripcion: "Convertimos diseños en experiencias reales, funcionales y bien construidas. Tecnologías modernas para calidad y escalabilidad."
    },
    {
      imagen: iconoDiseno,
      titulo: "Diseño UX/UI",
      descripcion: "Interfaces que equilibran usabilidad, estética y objetivos del negocio, basadas en investigación con usuarios."
    },
    {
      imagen: iconoProducto,
      titulo: "Desarrollo de Producto",
      descripcion: "Definimos y damos forma a productos digitales desde cero o mejoramos existentes, cubriendo todas las etapas."
    },
    {
      imagen: iconoConsultoria,
      titulo: "Consultoría",
      descripcion: "Asesoramos equipos en diseño, toma de decisiones e implementación de sistemas para alinear visión y ejecución."
    }
  ];

  return (
    <section className="pilares">
      <h2 className="pilares__titulo">Nuestros servicios</h2>
      <p className="pilares__intro">
        Diseñamos y desarrollamos productos digitales centrados en las personas. 
        Acompañamos desde la estrategia hasta la implementación.
      </p>
      
      <div className="pilares__grid">
        {pilares.map((pilar, index) => (
          <div key={index} className="pilar">
            <img src={pilar.imagen} alt={pilar.titulo} className="pilar__imagen" />
            <h3 className="pilar__titulo">{pilar.titulo}</h3>
            <p className="pilar__descripcion">{pilar.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pilares;