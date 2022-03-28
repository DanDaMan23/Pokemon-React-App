import { fireEvent, render, screen } from "@testing-library/react"
import Footer from "./footer"

describe("Footer Component", () => {
  const component = <Footer />

  it("renders the component", () => {
    // Arrange
    render(component)

    // Act

    // Assert
    expect(component).toMatchSnapshot()
  })

  it("scrolls up when scroll top is clicked", () => {
    // Arrange
    render(component)

    // Act
    const buttonElement = screen.getByTestId("scroll-top-button")

    // Assert
    fireEvent.scroll(buttonElement, { target: { scrollX: 0, scrollY: 0 } })
  })
})
