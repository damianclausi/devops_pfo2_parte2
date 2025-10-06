import Perfil from "./Perfil"
import "./Home.css";

export default function Home() {
  return (
    <div className="body-home">
      <div className="titles">
        <h1>¡Bienvenidos al Proyecto del Grupo 1!</h1>
        <p>Nosotros somos:</p>
      </div>
      <Perfil></Perfil>
    </div>
  )
}
