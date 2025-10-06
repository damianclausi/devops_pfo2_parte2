import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react"; // Importar useState, useRef y useEffect
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar"; // Importar TopNavbar
import Home from "./pages/Home";
import Antonio from "./pages/Antonio";
import Damian from "./pages/Damian";
import Cristian from "./pages/Cristian";
import Rocio from "./pages/Rocio";
import JsonData from "./pages/JsonData";
import ApiData from "./pages/ApiData";
import Bitacora from "./pages/Bitacora";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar el sidebar
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Estado para controlar la visibilidad de la navbar
  const sidebarRef = useRef(null); // Referencia al elemento del sidebar
  const hamburgerButtonRef = useRef(null); // Referencia al botón de hamburguesa
  const lastScrollTop = useRef(0); // Referencia para la última posición de scroll

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Cerrar sidebar al hacer clic fuera, excepto si es en el botón de hamburguesa
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target) // No cerrar si el clic es en el botón de hamburguesa
      ) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef, hamburgerButtonRef]); // Añadir hamburgerButtonRef a las dependencias

  // Ocultar/mostrar navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop.current) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }
      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para dispositivos iOS
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <TopNavbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} hamburgerButtonRef={hamburgerButtonRef} isNavbarVisible={isNavbarVisible} /> {/* Pasar la referencia del botón y el estado de visibilidad */}
      <div style={{ display: "flex", minHeight: "100vh", minWidth: "100vw", paddingTop: "4rem" }}> {/* Ajustar padding superior */}
        <Sidebar isOpen={isSidebarOpen} sidebarRef={sidebarRef} /> {/* Pasar el estado isOpen y la referencia al Sidebar */}
        <div style={{ flex: 1, paddingLeft: isSidebarOpen ? "0" : "0", transition: "padding-left 0.3s ease" }}> {/* Ajustar padding izquierdo en lugar de margin */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/antonio" element={<Antonio />} />
            <Route path="/damian" element={<Damian />} />
            <Route path="/cristian" element={<Cristian />} />
            <Route path="/rocio" element={<Rocio />} />
            <Route path="/json" element={<JsonData />} />
            <Route path="/api" element={<ApiData />} />
            <Route path="/bitacora" element={<Bitacora />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
