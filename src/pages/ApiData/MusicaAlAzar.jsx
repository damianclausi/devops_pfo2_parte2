import { useEffect, useState } from "react";

export default function MusicaAlAzar() {
  const [canciones, setCanciones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generos = ["rock", "pop", "jazz", "hiphop", "classical", "reggae"];
    const generoRandom = generos[Math.floor(Math.random() * generos.length)];

    fetch(`https://itunes.apple.com/search?term=${generoRandom}&limit=5`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length === 0) throw new Error("Sin resultados");
        setCanciones(data.results);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Error al obtener canciones");
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (canciones.length === 0) return <p>Cargando canciones...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h3>🎵 Canciones al Azar (iTunes)</h3>
      <ul>
        {canciones.map((cancion) => (
          <li key={cancion.trackId}>
            <strong>{cancion.trackName}</strong> - {cancion.artistName}
            <br />
            <audio controls src={cancion.previewUrl}>
              Tu navegador no soporta audio
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}
