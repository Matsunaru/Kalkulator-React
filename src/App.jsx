import { useState } from 'react'
import './App.css'
import Kalkulator from './Kalkulator'

function App() {
  const [count, setCount] = useState(0)

  return (<Kalkulator/>)
}

export default App
