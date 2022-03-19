import React from "react"
import { useSelector } from "react-redux"
import { Modal, Spinner } from "react-bootstrap"

const ModalSpinner = () => {
  const isLoading = useSelector((state) => state.spinner.isLoading)

  return (
    <Modal backdrop='static' show={isLoading} centered>
      <Modal.Body className='d-flex justify-content-center'>
        <Spinner animation='border' />
        <h2>Loading</h2>
      </Modal.Body>
    </Modal>
  )
}

export default ModalSpinner
