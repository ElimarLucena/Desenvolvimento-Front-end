import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Title from "./Title";
import pokemons from '../data.js';
import Pokemon from "./Pokemon";

class Pokedex extends Component {
    render() {
        return (
            <section>
                <Title />
                {
                    pokemons.map(({ name, type, averageWeight, image }) => (
                        <Pokemon 
                            key={ uuidv4() }
                            pokemonName={ name }
                            pokemonType={ type }
                            pokemonWeigth={ averageWeight }
                            pokemonImage={ image }
                        />
                    ))
                }
            </section>
        );
    }
}

export default Pokedex;