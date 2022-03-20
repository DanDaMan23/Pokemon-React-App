import React from "react"
import { Form, Button } from "react-bootstrap"
import { useFormik } from "formik"
import PokemonStatsModal from "../modals/pokemonStatsModal"

const PokemonSearchForm = () => {
  const { Group, Control } = Form

  const url = (pokemonName) =>
    `https://pokeapi.co/api/v2/pokemon/${pokemonName?.toLowerCase()}`

  const formik = useFormik({
    initialValues: {
      pokemonName: ""
    }
  })

  return (
    <div className='mb-3'>
      <Form onSubmit={formik.handleSubmit}>
        <Group>
          <Control
            type='text'
            name='pokemonName'
            placeholder='Enter Pokemon Name or number'
            onChange={formik.handleChange}
            value={formik.values.pokemonName}
          />
        </Group>
        <br />
        <PokemonStatsModal
          url={url(formik.values.pokemonName)}
          resetForm={formik.resetForm}
        />
      </Form>
    </div>
  )
}

export default PokemonSearchForm
