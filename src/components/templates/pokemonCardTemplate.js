import React from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"
import { titleCase } from "title-case"
import PokemonStatsModal from "../modals/pokemonStatsModal"

const PokemonCardTemplate = ({ name, stats }) => {
  const { Body, Title } = Card

  return (
    <Card className='mb-3'>
      <Body>
        <Title>{titleCase(name)}</Title>
        <PokemonStatsModal url={stats} />
      </Body>
    </Card>
  )
}

PokemonCardTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired
}

export default PokemonCardTemplate
