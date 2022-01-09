// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import pok from "../src/pok.png";
const axios = require("axios");
function App() {
  const [pokemonName, setPokemonName] = useState("");

  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const [chosen, setChosen] = useState(false);

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });

        setChosen(true);
      });
  };
  return (
    <>
    <div className="App">
      <div className="title_sec">
        <h2>Pokemon Stat</h2>
        <img src={pok} alt="" />
      </div>

      <div className="inp">
        <input
          placeholder="search here 👍"
          type="text"
          onChange={(event) => setPokemonName(event.target.value)}
        />
        <button onClick={searchPokemon}>Search Pokemon By Name</button>
      </div>
      <hr style={{border:'1px solid grey',width:'40%',background:'red'}} />
      <div className="card">
        {!chosen ? (
          <h2>Please chose a Pokemon</h2>
        ) : (
          <>
          <div style={{margin:'40px 0'}} className="cont">
           <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-evenly'}} className="fard">
              <h3>Name:{pokemon.name}</h3>
              <img src={pokemon.img} alt="" />
           </div>
           <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'flex-start'}}>
           <p style={{color:'crimson',textTransform:'capitalize'}}><span style={{color:'orange'}}>Species</span>: {pokemon.species}</p>
           <p style={{color:'crimson',textTransform:'capitalize'}}><span style={{color:'orange'}}>Hp</span>: {pokemon.hp}</p>
           </div>
           <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'flex-start'}}>
           <p style={{color:'crimson',textTransform:'capitalize'}}><span style={{color:'orange'}}>Attack</span>: {pokemon.attack}</p>
           <p style={{color:'crimson',textTransform:'capitalize'}}><span style={{color:'orange'}}>Defense</span>: {pokemon.defense}</p>
           </div>
           <p style={{textTransform:"capitalize",textAlign:'center',color:'crimson'}}><span style={{color:'orange'}}>Type</span>:{pokemon.type}</p>
           </div>
          </>
        )}
      </div>
    </div>


    <footer>
      <p>Website Created By ❤️ Asit Mandal</p>
    </footer>

    </>
  );
}

export default App;
