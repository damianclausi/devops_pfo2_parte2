import { Link } from "react-router-dom";
// Eliminar useState y useEffect ya que la visibilidad se controla desde App.jsx
import IconoGrupo from '../assets/IconoGrupo.jpeg'; // Importar la imagen
export default function Sidebar({ isOpen, sidebarRef }) { // Recibir isOpen y sidebarRef como props
  return (
    <>
      {/* Sidebar */}
      <div
        ref={sidebarRef} // Asignar la referencia al div principal del sidebar
        style={{
          width: isOpen ? "15rem" : "0", // Usar isOpen para controlar el ancho
          backgroundColor: "rgb(91, 59, 206)",
          padding: isOpen ? "2rem" : "0", // Usar isOpen para controlar el padding
          borderRadius: "0 20px 20px 0",
          overflow: "hidden",
          transition: "width 0.3s ease, padding 0.3s ease",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex:999
        }}
      >
        {isOpen && ( // Renderizar contenido solo si isOpen es true
          <>
            <h3 style={{ textAlign: "center" }}>
            <img src={IconoGrupo} alt="Icono del Grupo" className="icono-grupo" style={{ width: "7rem", height: "7rem" , margin: "0 auto", borderRadius:"50%"}}/> {/* Agregar la imagen */}
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                color: "white",
              }}
            >
              <li><Link to="/">🏠 Inicio</Link></li>
              <li><Link to="/antonio">👨 Antonio</Link></li>
              <li><Link to="/cristian">👨 Cristian</Link></li>
              <li><Link to="/damian">👨 Damián</Link></li>
              <li><Link to="/rocio">👩 Rocío</Link></li>
              <li><Link to="/json">📄 Datos JSON</Link></li>
              <li><Link to="/api">🌐 API Pública</Link></li>
              <li><Link to="/bitacora">📝 Bitácora</Link></li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
