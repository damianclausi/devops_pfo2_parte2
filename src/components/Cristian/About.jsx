import React from 'react';
import './About.css';
import fotoPerfil from '../../assets/foto-perfil.png'; // Asegúrate de que la ruta sea correcta

const About = () => {
  return (
    <section id="sobre-mi">
      <h2>Sobre mí</h2>
      <div className="sobre-mi-container">
        <img src={fotoPerfil} alt="Foto personal placeholder" width="150" height="150" />
        <p>
          ¡Hola! Soy Cristian R. Descosido, un apasionado desarrollador web en formación. Me encanta crear
          soluciones digitales eficientes y atractivas. Mi misión es combinar la tecnología y la creatividad
          para construir experiencias web memorables.
        </p>
      </div>
    </section>
  );
};

export default About;