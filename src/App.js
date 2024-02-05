import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyAlert from './components/MyAlert'
// import MyCard from './components/MyCard'
// import SingleBook from './components/SingleBook'
import horrorbooks from './data/horror.json'
import BookList from './components/BookList'
import CommentArea from './components/CommentArea'
import { Component } from 'react'

class App extends Component {
  state = { selected: '' }

  changeSelected = (value) => {
    this.setState({ selected: value })
  }
  render() {
    return (
      <>
        <header>
          <MyNav />
          <MyAlert />
        </header>
        <main>
          <BookList
            array={horrorbooks}
            changeSelected={this.changeSelected}
            selected={this.state.selected}
          />

          {/* <SingleBook
          title={horrorbooks[0].title}
          img={horrorbooks[0].img}
          category={horrorbooks[0].category}
          price={horrorbooks[0].price}
        /> */}
        </main>
        <footer>
          <MyFooter />
        </footer>
      </>
    )
  }
}

export default App
