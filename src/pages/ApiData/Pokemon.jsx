import { useEffect, useState } from 'react';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegimos un Pokémon al azar entre los primeros 151
    const randomId = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener Pokémon');
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando Pokémon...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h3>🎮 Pokémon Aleatorio</h3>
      <h4>{pokemon.name.toUpperCase()}</h4>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Tipo: {pokemon.types.map((t) => t.type.name).join(', ')}</p>
      <p>Altura: {pokemon.height} dm</p>
      <p>Peso: {pokemon.weight} hg</p>
    </div>
  );
}

