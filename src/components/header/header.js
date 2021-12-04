import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

const Header = () => {
  const { Brand, Toggle, Collapse } = Navbar
  const { Link } = Nav

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Brand href='/'>Pokemon React API</Brand>
        <Toggle aria-controls='pokemon-nav-bar' />
        <Collapse id='pokemon-nav-bar'>
          <Nav className='me-auto'>
            <Link href='/'>Home</Link>
            <Link href='/pokemons'>Pokemons</Link>
            <Link href='/types'>Types</Link>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
