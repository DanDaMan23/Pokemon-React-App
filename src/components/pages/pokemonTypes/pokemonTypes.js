import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTypesRequest } from "../../../slices/typesSlice"

import "./pokemonTypes.css"

const PokemonTypes = () => {
  const dispatch = useDispatch()
  const typesStore = useSelector((state) => state.types.types)

  useEffect(() => {
    dispatch(getTypesRequest())
  }, [dispatch])

  console.log(typesStore)

  return <h1>PokemonTypes</h1>
}

export default PokemonTypes
