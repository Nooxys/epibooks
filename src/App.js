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
import { useState } from 'react'

const App = () => {
  const [selected, setSelected] = useState('')

  const changeSelected = (value) => {
    setSelected(value)
  }

  return (
    <>
      <header>
        <MyNav />
        <MyAlert />
      </header>
      <main>
        <BookList
          array={horrorbooks}
          changeSelected={changeSelected}
          selected={selected}
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

export default App
