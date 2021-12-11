import React from "react"
import { Form, Button } from "react-bootstrap"
import { useFormik } from "formik"

const PokemonSearchForm = () => {
  const { Group, Label, Control } = Form

  const formik = useFormik({
    initialValues: {
      pokemon: ""
    },
    onSubmit: async (values, { resetForm }) => {
      await console.log(values)
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
