import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const { pokemonName, pokemonType, pokemonWeigth, pokemonImage } = this.props;
        return (
            <section>
                <p>{ `Nome do Pokémon: ${pokemonName}` }</p>
                <p>{ `Tipo do Pokémon: ${pokemonType}` }</p>
                <p>{ `Peso médio do Pokémon: ${pokemonWeigth.value} ${pokemonWeigth.measurementUnit}` }</p>
                <img src={ pokemonImage } alt={ `Imagem do Pokémon: ${pokemonName}` } />
            </section>
        );
    }
}

const { string } = PropTypes;
const { number } = PropTypes;

Pokemon.propTypes = {
    pokemonName: string.isRequired,
    pokemonType: string.isRequired,
    pokemonWeigth: PropTypes.shape({
        value: number.isRequired,
        measurementUnit: string.isRequired,
    }),
    pokemonImage: string.isRequired,
};

export default Pokemon;