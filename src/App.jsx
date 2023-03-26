import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Login from './Pages/Login/Login'
import Shop from './Pages/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Shop />
      <Login />
    </div>
  )
}

export default App
