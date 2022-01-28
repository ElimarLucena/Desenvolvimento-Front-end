import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Title from "./Title";
import pokemons from '../data.js';
import Pokemon from "./Pokemon";

class Pokedex extends Component {
    // constructor () {
    //     super ()
    //     this.state = {
    //         current: 0
    //     }
    //     this.handleClick = this.handleClick.bind(this);
    // }

    state = {
            currentPokemon: 0,
            typePokemon: '',
            pokemon: pokemons,
        }

    handleType = (event) => {
        // const { target: { type }} = event
        if (event.target.innerText != 'All') {
            return this.setState(() => ({
                currentPokemon: 0,
                pokemon: pokemons.filter((item) => item.type.includes(event.target.innerText)),
            }))
        }
        return this.setState(() =>({
            pokemon: pokemons,
        }))
    }

    handleClick = () => {
        console.log('1',this.state.pokemon.length)
        console.log('2',this.state.currentPokemon)
        console.log(this.state.pokemon)
        if (this.state.currentPokemon === this.state.pokemon.length -1) {
            return this.setState(() => ({
                currentPokemon: 0,
            }));
        }
        return this.setState((valorDoObjAnterior) => ({
            currentPokemon: valorDoObjAnterior.currentPokemon + 1,
        }));
    }

    render() {
        const { currentPokemon, pokemon } = this.state

        return (
            <section>
                <Title />
                {
                    // pokemons.map(({ name, type, averageWeight, image }) => (
                        <Pokemon 
                            // key={ uuidv4() }
                            pokemonName={ pokemon[currentPokemon].name }
                            pokemonType={ pokemon[currentPokemon].type }
                            pokemonWeigth={ pokemon[currentPokemon].averageWeight }
                            pokemonImage={ pokemon[currentPokemon].image }
                        />
                    // ))
                }
                <button onClick={this.handleType}>All</button>
                <button onClick={this.handleType}>Electric</button>
                <button onClick={this.handleType}>Fire</button>
                <button onClick={this.handleType}>Bug</button>
                <button onClick={this.handleType}>Poison</button>
                <button onClick={this.handleType}>Psychic</button>
                <button onClick={this.handleType}>Normal</button>
                <button onClick={this.handleType}>Dragon</button>

                <button onClick={this.handleClick}>Próximo Pokémon</button>
            </section>
        );
    }
}

export default Pokedex;