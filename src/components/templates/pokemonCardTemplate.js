import React from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"
import { titleCase } from "title-case"

const PokemonCardTemplate = ({ name }) => {
  const { Body, Title } = Card

  return (
    <Card>
      <Body>
        <Title>{titleCase(name)}</Title>
      </Body>
    </Card>
  )
}

PokemonCardTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  // url: PropTypes.string.isRequired
}

export default PokemonCardTemplate
