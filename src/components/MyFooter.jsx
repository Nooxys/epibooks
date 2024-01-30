import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MyFooter = () => {
  return (
    <>
      <Container fluid className="bg-dark">
        <Row className="justify-content-evenly pt-4">
          <Col md={3} className="text-white text-md-center ps-md-5">
            <p>Orders</p> <p>Work with us!</p> <p>Contacts</p> <p>Artists</p>
          </Col>
          <Col md={3} className="text-white text-md-center pe-md-5 pb-4 ">
            <p>EpiBooks History</p> <p>Why Epibooks?</p> <p>F.A.Q</p>
            <p>Polar Bears Section</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyFooter
