import { useState } from 'react'
import './App.css'
import UseSt from './Components/Usestate'
import Counter from './Components/CounterState'
import MyContext from './MyContext';
import Comp1 from './Components/Comp1';

function App() {
  const [count, setCount] = useState(0)
  var a = 6

  return (
    <>
    <UseSt></UseSt>
    <Counter></Counter>
    <MyContext.Provider value={a}>
      <Comp1/>
    </MyContext.Provider>
    </>
  )
}

export default App;