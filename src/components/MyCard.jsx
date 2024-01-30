import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import horrorbooks from '../data/horror.json'

const MyCard = () => {
  return (
    <>
      <Container>
        <Row className="g-3 my-5">
          {horrorbooks.map((book) => {
            return (
              <Col md={6} lg={3} key={book.asin}>
                <Card className="h-100 text-center ">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    width={100}
                    height={500}
                  />
                  <Card.Body className="d-flex flex-column justify-content-end ">
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.category}</Card.Text>
                    <Button className="w-50 mx-auto" variant="primary">
                      € {book.price} - <i class="bi bi-cart-check"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default MyCard
