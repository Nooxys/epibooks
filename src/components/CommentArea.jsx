import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = { comments: [] }

  fetchComments = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' +
        this.props.selected,
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
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selected !== this.props.selected) this.fetchComments()
  }
  componentDidMount() {
    this.fetchComments()
  }
  render() {
    return (
      <>
        {this.props.selected && <CommentList review={this.state.comments} />}
        <AddComment selected={this.props.selected} />
      </>
    )
  }
}
export default CommentArea
