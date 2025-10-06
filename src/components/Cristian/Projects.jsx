import React from 'react';
import './Projects.css';
import ProjectPhoto1 from '../../assets/ProjectPhoto1.png';
import ProjectPhoto2 from '../../assets/ProjectPhoto2.png';

const projectsData = [
  {
    image: ProjectPhoto1,
    title: 'Acme Store',
    link: 'https://demo.vercel.store/',
    description: 'Sitio de Ecommerce para reconocida marca de ropa'
  },
  {
    image: ProjectPhoto2,
    title: 'Photo Galery',
    link: 'https://nextjsconf-pics.vercel.app/',
    description: 'Galería de fotos para evento de tecnología.'
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="tarjetas-container">
      <h2>Proyectos Destacados</h2>
      {projectsData.map((project, index) => (
        <div className="tarjeta" key={index}>
          <img src={project.image} alt={`Imagen del Proyecto ${project.title}`} />
          <h3>
            {project.title}{' '}
            <a href={project.link} target="_blank" rel="noopener" aria-label={`Ver proyecto ${project.title}`}>
              <span className="link-icon"></span>
            </a>
          </h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;