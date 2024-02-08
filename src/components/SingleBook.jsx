import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// import CommentArea from './CommentArea'
const SingleBook = (props) => {
  // state = { selected: false }

  return (
    <Col md={6} lg={6} key={props.asin}>
      <Card
        data-testid="card-data"
        onClick={() => {
          props.changeSelected(props.asin)
        }}
        className={
          props.selected
            ? 'h-100 text-center border border-danger'
            : 'h-100 text-center'
        }
      >
        <Card.Img variant="top" src={props.img} width={100} height={500} />
        <Card.Body className="d-flex flex-column justify-content-end ">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.category}</Card.Text>
          <Button className="w-50 mx-auto" variant="primary">
            € {props.price} - <i className="bi bi-cart-check"></i>
          </Button>
          {/* {this.state.selected && <CommentArea indice={this.props.asin} />} */}
        </Card.Body>
      </Card>
    </Col>
  )
}
export default SingleBook
