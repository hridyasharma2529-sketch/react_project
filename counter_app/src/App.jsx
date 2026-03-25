import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
//hooks are used to change the value and reflect in the UI

function App() {

  let [counter, setCounter] = useState(0) //useState changes the value and reflects in the UI
  let [message, setMessage] = useState("")

  //let count = 0
  function Increase() {

    setCounter(counter + 1)
    //counter = counter + 1 could even use this
    console.log("clicked", counter)
  }

  function Decrease() {
    if (counter == 0) {
      setMessage("counter is already 0")

    }
    else {
      setCounter(counter - 1)
    }
    //counter-- could even use this
    console.log("clicked", counter)
  }
  return (
    <div id="maindiv">
      <h1>COUNTER APP</h1>
      <h2>count= {counter}</h2>
      <button onClick={Increase}>Increment</button>
      <br />
      <button onClick={Decrease}>Decrement</button>
      <p>{message}</p>
    </div>

  )
}


export default App
