import React from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"
import { titleCase } from "title-case"
import PokemonStatsModal from "../modals/pokemonStatsModal"

const PokemonCardTemplate = ({ name, url }) => {
  const { Body, Title } = Card

  return (
    <Card className='mb-3'>
      <Body>
        <Title>{titleCase(name)}</Title>
        <PokemonStatsModal url={url} />
      </Body>
    </Card>
  )
}

PokemonCardTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default PokemonCardTemplate
