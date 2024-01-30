import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function MyAlert() {
  const [show, setShow] = useState(true)

  return (
    <>
      <Alert
        className="w-25 text-center mx-auto mt-3"
        show={show}
        variant="dark"
      >
        <Alert.Heading>Welcome, Visitor!</Alert.Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit
          porro, ea asperiores ipsam aspernatur sint est tempore! Distinctio
          itaque quod totam fugiat maiores dolorem vitae natus quia earum
          eligendi?
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            Close me
          </Button>
        </div>
      </Alert>
    </>
  )
}

export default MyAlert
