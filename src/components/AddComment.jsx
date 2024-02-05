import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    comment: {
      comment: '',
      rate: '1',
      elementId: this.props.selected,
    },
  }

  sendComment = () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOWIzNjViMjYxNTAwMTk4YTY5M2MiLCJpYXQiOjE3MDY3OTM3ODIsImV4cCI6MTcwODAwMzM4Mn0.J68-1s4k7_s165eAhgt-c6_2O5jzeAi4mALwZ6w58VU',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.comment),
    })
      .then((response) => {
        if (response.ok) {
          alert('La recensione è stata salvata')
        } else {
          alert('la recensione NON è stata salvata :(')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(this.state.comment)
          this.sendComment()
        }}
      >
        <Form.Control
          value={this.state.comment.comment}
          onChange={(e) => {
            this.setState({
              comment: {
                ...this.state.comment,
                comment: e.target.value,
              },
            })
          }}
        />
        <Form.Select
          value={this.state.comment.rate}
          onChange={(e) => {
            this.setState({
              comment: {
                ...this.state.comment,
                rate: e.target.value,
              },
            })
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
        <Button type="submit">INVIA</Button>
      </Form>
    )
  }
}

export default AddComment
