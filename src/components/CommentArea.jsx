import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = { comments: [] }

  fetchComments = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' +
        this.props.indice,
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
        this.setState({
          comments: data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.fetchComments()
  }
  render() {
    return (
      <>
        <CommentList review={this.state.comments} />
        <AddComment />
      </>
    )
  }
}
export default CommentArea
