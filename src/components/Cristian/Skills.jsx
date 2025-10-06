import React from 'react';
import './Skills.css';

const skillsData = {
  dominated: ['HTML5', 'CSS3', 'JavaScript', 'Bases de Datos SQL'],
  learning: ['React', 'Node.js', 'Cloud Computing'],
  hobbies: ['Kick Boxing', 'Crossfit', 'Motociclismo']
};

const Skills = () => {
  return (
    <section id="habilidades">
      <h2>Habilidades y Hobbies</h2>
      <div className="habilidades-listado">
        <div>
          <h3>Tecnologías Dominadas</h3>
          <ul>
            {skillsData.dominated.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Tecnologías por Aprender</h3>
          <ul>
            {skillsData.learning.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Hobbies</h3>
          <ul>
            {skillsData.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;