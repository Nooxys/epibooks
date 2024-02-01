import { Component } from 'react'
import Button from 'react-bootstrap/Button'
class CommentList extends Component {
  render() {
    return this.props.review.map((comment) => {
      return (
        <div className="mb-3" key={comment._id}>
          <p className="mb-1">{comment.author}</p>
          <p className="mb-1">{comment.comment}</p>
          <div className="d-flex align-items-center justify-content-between">
            <span className="mb-1">{comment.rate}</span>
            <Button
              variant="danger"
              className="btn-sm"
              onClick={() => {
                fetch(
                  'https://striveschool-api.herokuapp.com/api/comments/' +
                    comment._id,
                  {
                    method: 'DELETE',
                    headers: {
                      Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOWIzNjViMjYxNTAwMTk4YTY5M2MiLCJpYXQiOjE3MDY3OTM3ODIsImV4cCI6MTcwODAwMzM4Mn0.J68-1s4k7_s165eAhgt-c6_2O5jzeAi4mALwZ6w58VU',
                    },
                  }
                )
                  .then((response) => {
                    if (response.ok) {
                      return alert('Commento eliminato correttamente')
                    } else throw new Error()
                  })
                  .catch((err) => {
                    alert('Something went wrong...', err)
                  })
              }}
            >
              DEL
            </Button>
          </div>
        </div>
      )
    })
  }
}
export default CommentList
