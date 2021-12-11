import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Button } from "react-bootstrap"
import { useFormik } from "formik"
import { setPokemonIdentifierRequest } from "../../slices/pokemonSlice"

const PokemonSearchForm = () => {
  const { Group, Label, Control } = Form
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      pokemon: ""
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(setPokemonIdentifierRequest(values.pokemon))
      resetForm()
    }
  })

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Group>
          <Label>Pokemon</Label>
          <Control
            type='text'
            name='pokemon'
            placeholder='Enter Pokemon Name or number'
            onChange={formik.handleChange}
            value={formik.values.pokemon}
          />
        </Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default PokemonSearchForm
