import { useEffect, useState } from "react";

export default function ViajesAlAzar() {
  const [destinos, setDestinos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        if (!res.ok) throw new Error('Error en la respuesta de la API');
        return res.json();
      })
      .then((data) => {
        const seleccionados = [];
        while (seleccionados.length < 3 && seleccionados.length < data.length) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const pais = data[randomIndex];
          if (!seleccionados.some((p) => p.cca3 === pais.cca3)) {
            seleccionados.push(pais);
          }
        }
        setDestinos(seleccionados);
      })
      .catch((err) => {
        console.error('Error al obtener destinos:', err);
        setError('Error al obtener destinos');
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (destinos.length === 0) return <p>Cargando destinos de viaje...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h3>🌍 Destinos de Viaje al Azar</h3>
      <ul>
        {destinos.map((pais) => (
          <li key={pais.cca3}>
            <strong>{pais.name.common}</strong> ({pais.region})
            <br />
            Capital: {pais.capital ? pais.capital[0] : 'N/A'}
            <br />
            Población: {pais.population.toLocaleString()}
            <br />
            <img
              src={pais.flags.png}
              alt={`Bandera de ${pais.name.common}`}
              style={{ width: '100px', marginTop: '5px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

