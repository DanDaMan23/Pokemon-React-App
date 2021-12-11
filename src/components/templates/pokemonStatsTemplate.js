import React from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"

const PokemonStatsTemplate = () => {
  let { pokemonId } = useParams()
  return (
    <Container>
      <h1>PokemonStatsTemplate</h1>
      <p>{pokemonId}</p>
    </Container>
  )
}

export default PokemonStatsTemplate
