import "./ApiData.css";

import CriptoMonedas from "./ApiData/CriptoMonedas";
import Pokemon from "./ApiData/Pokemon";
import DragonBall from "./ApiData/DragonBall";
import MusicaAlAzar from "./ApiData/MusicaAlAzar";
import ViajesAlAzar from "./ApiData/ViajesAlAzar";
import GatosAleatorios from "./ApiData/GatosAleatorios";

export default function ApiData() {
  return (
    <div className="api-data-contenedor">
      <h2>🌐 Información desde APIs públicas</h2>

      <div className="grid">
        <div className="tarjeta">
          <CriptoMonedas />
        </div>

        <div className="tarjeta">
          <Pokemon />
        </div>

        <div className="tarjeta">
          <DragonBall />
        </div>

        <div className="tarjeta">
          <MusicaAlAzar />
        </div>

        <div className="tarjeta">
          <ViajesAlAzar />
        </div>

        <div className="tarjeta">
          <GatosAleatorios />
        </div>
      </div>
    </div>
  );
}
