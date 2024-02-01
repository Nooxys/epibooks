import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Component } from 'react'
import CommentArea from './CommentArea'
class SingleBook extends Component {
  state = { selected: false }
  render() {
    return (
      <Col md={6} lg={3} key={this.props.asin}>
        <Card
          onClick={() =>
            this.state.selected
              ? this.setState({ selected: false })
              : this.setState({ selected: true })
          }
          className={
            this.state.selected
              ? 'h-100 text-center border border-danger'
              : 'h-100 text-center'
          }
        >
          <Card.Img
            variant="top"
            src={this.props.img}
            width={100}
            height={500}
          />
          <Card.Body className="d-flex flex-column justify-content-end ">
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.category}</Card.Text>
            <Button className="w-50 mx-auto" variant="primary">
              € {this.props.price} - <i className="bi bi-cart-check"></i>
            </Button>
            {this.state.selected && <CommentArea indice={this.props.asin} />}
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
export default SingleBook
