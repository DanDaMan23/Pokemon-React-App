import React from "react"
import PropTypes from "prop-types"
import { titleCase } from "title-case"

import "../pages/pokemonTypes/pokemonTypes.css"

const TypeCardTemplate = ({ name }) => (
  <div className={`d-flex justify-content-center ${name} m-1 border border-dark rounded`}>
    <h1>{titleCase(name)}</h1>
  </div>
)

TypeCardTemplate.propTypes = {
  name: PropTypes.string.isRequired
}

export default TypeCardTemplate
