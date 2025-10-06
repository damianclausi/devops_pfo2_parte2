import { useEffect, useState } from "react";

export default function GatosAleatorios() {
  const [gatos, setGatos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerGatos = async () => {
      try {
        const res = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=3"
        );
        if (!res.ok) throw new Error("Error en la respuesta de la API");
        const data = await res.json();
        setGatos(data.slice(0, 2));
      } catch (err) {
        console.error("Error al obtener gatos:", err);
        setError("Error al obtener imágenes de gatos");
      }
    };

    obtenerGatos();
  }, []);

  if (error) return <p>{error}</p>;
  if (gatos.length === 0) return <p>Cargando gatos...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h3>🐱 Gatito Aleatorio</h3>
      <ul
        style={{ listStyle: "none", padding: 0, display: "flex", gap: "10px", flexDirection: "column"}}
      >
        {gatos.map((gato, index) => (
          <li key={index}>
            <img
              src={gato.url}
              alt="Gato aleatorio"
              style={{ width: "250px", borderRadius: "10px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
