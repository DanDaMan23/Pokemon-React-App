import React from "react"
import { Card } from "react-bootstrap"

const PokemonCardTemplate = ({ name, type, abilities }) => {
  const { Body, Title, Subtitle, Text } = Card
  return (
    <Card>
      <Body>
        <Title>{name}</Title>
        <Subtitle>Type: {type}</Subtitle>
        <Text>{abilities}</Text>
      </Body>
    </Card>
  )
}

export default PokemonCardTemplate
