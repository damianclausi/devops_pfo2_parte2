import { useEffect, useState } from "react";

export default function DragonBall() {
  const [personaje, setPersonaje] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener datos");
        return res.json();
      })
      .then((data) => {
        const personajes = data.items || data; 
        const randomIndex = Math.floor(Math.random() * personajes.length);
        setPersonaje(personajes[randomIndex]);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudo cargar el personaje");
      });
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!personaje) return <p>Cargando personaje de Dragon Ball...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h3>🌀 Personaje de Dragon Ball (aleatorio)</h3>
      <h4>{personaje.name}</h4>
      <img
        src={personaje.image}
        alt={personaje.name}
        style={{ maxWidth: "200px", borderRadius: "8px" }}
      />
      <p>
        <strong>Raza:</strong> {personaje.race}
      </p>
      <p>
        <strong>Ki:</strong> {personaje.ki}
      </p>
    </div>
  );
}
