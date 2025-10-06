import React from 'react';
import '../../App.css'; // Importa App.css para las variables CSS globales
import '../../pages/Cristian.css'
import './Header.css'

const Header = () => {
  return (
    <header>
      <h1 className="animate__animated animate__slideInDown">Cristian R. Descosido Developer</h1>
      {/* El botón de cambio de tema se manejará con un componente de React */}
      <button className="theme-switcher-grid" id="theme-switcher-grid" aria-label="Switch theme">
        <div className="sun" id="sun" aria-hidden="true"></div>
        <div className="moon-overlay" id="moon-overlay" aria-hidden="true"></div>
        <div className="cloud-ball cloud-ball-left" id="ball1" aria-hidden="true"></div>
        <div className="cloud-ball cloud-ball-middle" id="ball2" aria-hidden="true"></div>
        <div className="cloud-ball cloud-ball-right" id="ball3" aria-hidden="true"></div>
        <div className="cloud-ball cloud-ball-top" id="ball4" aria-hidden="true"></div>
        <div className="star" id="star1" aria-hidden="true"></div>
        <div className="star" id="star2" aria-hidden="true"></div>
        <div className="star" id="star3" aria-hidden="true"></div>
        <div className="star" id="star4" aria-hidden="true"></div>
      </button>
    </header>
  );
};

export default Header;