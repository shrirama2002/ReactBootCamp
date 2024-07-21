import "./PokemonGen.css";

export default function RandomPokemon() {
  const pokenum = Math.floor(Math.random() * 151) + 1;
  const myurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokenum}.png`;
  return (
    <div className="RandomPokemon">
      <h1>Pokemon #{pokenum}</h1>
      <img src={myurl} />
    </div>
  );
}
