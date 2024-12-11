import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseSt from './Components/Usestate'
import Counter from './Components/CounterState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseSt></UseSt>
    <Counter></Counter>
    </>
  )
}

export default App