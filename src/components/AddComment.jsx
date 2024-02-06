import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = (props) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: '1',
    elementId: props.selected,
  })
  const sendComment = () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOWIzNjViMjYxNTAwMTk4YTY5M2MiLCJpYXQiOjE3MDY3OTM3ODIsImV4cCI6MTcwODAwMzM4Mn0.J68-1s4k7_s165eAhgt-c6_2O5jzeAi4mALwZ6w58VU',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
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

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        console.log(comment)
        sendComment()
      }}
    >
      <Form.Control
        value={comment.comment}
        onChange={(e) => {
          setComment({
            ...comment,
            comment: e.target.value,
          })
        }}
      />
      <Form.Select
        value={comment.rate}
        onChange={(e) => {
          setComment({
            ...comment,
            rate: e.target.value,
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

export default AddComment
