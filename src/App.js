import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyAlert from './components/MyAlert'
import MyCard from './components/MyCard'
function App() {
  return (
    <>
      <header>
        <MyNav />
        <MyAlert />
      </header>
      <main>
        <MyCard />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  )
}

export default App
