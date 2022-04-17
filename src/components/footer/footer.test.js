import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import Footer from "./footer"

describe("Footer Component", () => {
  const component = <Footer />
  it("render Pokemon React App as a text", () => {
    // Arrange
    render(component)

    // Act

    // Assert
    const pokemonReactFooterTitle = screen.getByText("Pokemon React App")
    expect(pokemonReactFooterTitle).toBeInTheDocument()
  })

  it("renders Scroll Top button by text", () => {
    // Arrange
    render(component)

    // Act

    // Assert
    const scrollTopButton = screen.getByText("Scroll Top")
    expect(scrollTopButton).toBeInTheDocument()
  })
})
