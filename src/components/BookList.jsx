import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SingleBook from './SingleBook'
import { Component } from 'react'
import { Form } from 'react-bootstrap'
class BookList extends Component {
  state = { word: '' }
  render() {
    return (
      <Container>
        <Form.Group id="form" className="mb-5 mt-5 mx-auto w-25">
          <Form.Label className="display-6 text-center pb-3">
            Search for a Book! <i className="bi bi-book"></i>
          </Form.Label>
          <Form.Control
            type="Text"
            placeholder="I wish to see.."
            onChange={(e) => this.setState({ word: e.target.value })}
          />
        </Form.Group>

        <Row className="g-3 my-5">
          {this.props.array
            .filter((book) => book.title.includes(this.state.word))
            .map((book) => (
              <SingleBook
                title={book.title}
                img={book.img}
                category={book.category}
                price={book.price}
                key={book.asin}
              />
            ))}
        </Row>
      </Container>
    )
  }
}

export default BookList
