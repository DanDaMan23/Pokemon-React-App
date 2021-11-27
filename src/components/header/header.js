import React, { useEffect } from "react"
import { Navbar, Container } from "react-bootstrap"
import { getMultiplePokemons, getPokemon } from "../../helpers/fetchWrapper"

const Header = () => {
  const { Brand } = Navbar

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Brand href='#'>Pokemon React API</Brand>
      </Container>
    </Navbar>
  )
}

export default Header
