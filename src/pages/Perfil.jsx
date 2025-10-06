// src/pages/Perfil.jsx
// src/pages/Perfil.jsx
import { useParams, Link } from 'react-router-dom';
import './Perfil.css';

const integrantes = [
  {
    id: '1',
    nombre: 'César Antonio Gill',
    habilidades: ['JavaScript', 'React', 'Node.js', 'HTML5 & CSS3', 'MySQL'],
    icono: 'https://i.imgur.com/9g7edgU.jpeg'
  },
  {
    id: '2',
    nombre: 'Cristian Descosido',
    habilidades: ['HTML5', 'CSS3', 'JavaScript', 'Bases de Datos SQL'],
    icono: 'https://github.com/damianclausi/tp1-react-grupo1/blob/main/src/assets/foto-perfil.png?raw=true'
  },
  {
    id: '3',
    nombre: 'Damián Andrés Clausi',
    habilidades: ['JavaScript', 'React', 'Node.js', 'HTML5 & CSS3', 'MySQL'],
    icono:
      'https://damianclausi.github.io/portfoliopersonal-pfo2/img/avatar.png',
  },
  {
    id: '4',
    nombre: 'Rocío Ailén Gómez',
    habilidades: ['Python', 'Scrapy', 'JavaScript', 'Airflow', 'PostgreSQL'],
    icono:
      'https://github.com/rragmz/portafoliojs/blob/main/img/profile.png?raw=true',

  },
];

export default function Perfil() {
  const { id } = useParams();

  if (!id) {
    // Tarjetas de todos los integrantes HOME
    return (
      <div className="perfil-cards-container">
        {integrantes.map((persona) => (
          <div className="perfil-card">
            <img src={persona.icono} alt={persona.nombre} className="perfil-card-img" />
            <h3>{persona.nombre}</h3>
            <p>{persona.habilidades.join(', ')}</p>
          </div>
        ))}
      </div>
    );
  }
}
