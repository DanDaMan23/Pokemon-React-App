import React, { useEffect } from "react"
import { Container, Row, Col, Modal, Spinner } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getTypesRequest } from "../../../slices/typesSlice"
import TypeCardTemplate from "../../templates/typeCardTemplate"

import "./pokemonTypes.css"

const PokemonTypes = () => {
  const dispatch = useDispatch()
  const typesStore = useSelector((state) => state.types.types)
  const isLoading = useSelector((state) => state.spinner.isLoading)

  useEffect(() => {
    dispatch(getTypesRequest())
  }, [dispatch])

  return (
    <Container className='mt-3'>
      <h1 className='mb-5'>PokemonTypes</h1>
      <Row xs={1} sm={2} md={3}>
        {typesStore.data?.results &&
          typesStore.data.results.map((type) => (
            <Col key={type.name}>
              <TypeCardTemplate name={type.name} />
            </Col>
          ))}
      </Row>
      <Modal backdrop='static' show={isLoading} centered>
        <Modal.Body className='d-flex justify-content-center'>
          <Spinner animation='border' />
          <h2>Loading</h2>
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default PokemonTypes
