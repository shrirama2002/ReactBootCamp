import "./styles.css";
import Dog from "./Dog.js";
import RandomPokemon from "./PokemonGen";
function Greeter() {
  return <h1>hello there</h1>;
}
export default function App() {
  return (
    <div className="App">
      <RandomPokemon />
      {/* <h1>Hello CodeSandbox</h1>
      <Greeter />
      <Dog />
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
