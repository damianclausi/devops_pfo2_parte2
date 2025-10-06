import data from "../data/data.json";
import "./JsonData.css";

export default function JsonData() {
  return (
    <div className="json-data">
      <h2>🎬 Lista de Películas (desde JSON)</h2>
      <div className="json-data-container">
        {data.map((pelicula) => (
          <div
            key={pelicula.id}
            style={{
              border: "2px solid rgb(199, 184, 252)",
              padding: "1rem",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 249, 249, 0.952)",
              textAlign: "center",
            }}
            className="json-data-pelicula"
          >
            {pelicula.caratula && (
              <img
                src={pelicula.caratula}
                alt={`Carátula de ${pelicula.titulo}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                  marginBottom: "0.5rem",
                }}
              />
            )}
            <h3>{pelicula.titulo}</h3>
            <p>
              <strong>Director:</strong> {pelicula.director}
            </p>
            <p>
              <strong>Año:</strong> {pelicula.anio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
