import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

const CommentArea = (props) => {
  const [comments, setComments] = useState([])
  const fetchComments = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + props.selected,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOWIzNjViMjYxNTAwMTk4YTY5M2MiLCJpYXQiOjE3MDY3OTM3ODIsImV4cCI6MTcwODAwMzM4Mn0.J68-1s4k7_s165eAhgt-c6_2O5jzeAi4mALwZ6w58VU',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella ricezione dati dal server')
        }
      })
      .then((data) => {
        console.log(data)
        setComments(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selected])

  return (
    <>
      {props.selected && <CommentList review={comments} />}
      <AddComment selected={props.selected} />
    </>
  )
}

export default CommentArea
