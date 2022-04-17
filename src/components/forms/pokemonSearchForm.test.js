import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../store/store"
import PokemonSearchForm from "./pokemonSearchForm"

describe("Pokemon Search Form", () => {
  const component = (
    <Provider store={store}>
      <PokemonSearchForm />
    </Provider>
  )

  it("Renders Pokemon Form", () => {
    // Arrange
    render(component)

    // Act

    // Assert
    const pokemonSearchFormElement = screen.getByTestId("pokemon-search-form")
    expect(pokemonSearchFormElement).toBeInTheDocument()
  })
})
