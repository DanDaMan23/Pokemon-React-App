import React from "react"
import { Button, Container } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <div className='mt-4 mb-1 d-flex justify-content-center'>
        <Button
          data-testid='scroll-top-button'
          variant='dark'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          Scroll Top
        </Button>
      </div>
      <div className='bg-dark text-light p-4'>
        <Container>
          <h4>Pokemon React App</h4>
        </Container>
      </div>
    </>
  )
}

export default Footer
