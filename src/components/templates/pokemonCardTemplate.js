import React from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"
import { titleCase } from "title-case"

const PokemonCardTemplate = ({ name, types, abilities }) => {
  const { Body, Title, Subtitle } = Card
  let pokemonTypes = ""
  types.map((type) => (pokemonTypes += titleCase(type.type.name) + " "))

  const pokemonAbilities = []
  abilities.map((ability) =>
    pokemonAbilities.push(titleCase(ability.ability.name))
  )

  return (
    <Card>
      <Body>
        <Title>{titleCase(name)}</Title>
        <Subtitle>Type: {pokemonTypes}</Subtitle>
        <br />
        <div>
          <h5>Abilities</h5>
          <ul>
            {pokemonAbilities.map((ability) => (
              <li key={ability}>{ability}</li>
            ))}
          </ul>
        </div>
      </Body>
    </Card>
  )
}

PokemonCardTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  abilities: PropTypes.array.isRequired
}

export default PokemonCardTemplate
