import React from 'react';
import './TopNavbar.css';

export default function TopNavbar({ toggleSidebar, isSidebarOpen, hamburgerButtonRef, isNavbarVisible }) { // Recibir isSidebarOpen, hamburgerButtonRef y isNavbarVisible como props
  return (
    <nav className={`top-navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}> {/* Añadir clase 'visible' o 'hidden' */}
      <button ref={hamburgerButtonRef} className="hamburger-button" onClick={toggleSidebar}> {/* Asignar la referencia al botón */}
        {isSidebarOpen ? 'X' : '☰'} {/* Cambiar el texto del botón basado en isSidebarOpen */}
      </button>
    </nav>
  );
}