import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// useState (any value)
// ab jahan kahin v counter likha hoga , woh update ho jayega
let [counter, setCounter]=useState(15)

  // let counter =15

  const addValue =  () =>{
    // console.log("value added", Math.random());
    // console.log("clicked ", counter);
    // counter =counter+1
    if(counter <20){
    setCounter(counter+1) 
    }
  }
 const removeValue =  () =>{
    // console.log("value added", Math.random());
    // console.log("clicked ", counter);
   
    if(counter > 0){
    setCounter(counter-1) 
    }
}
  return (
    <>
     <h1>Code and React</h1>
     <h2>Counter value :{counter}</h2>
     <button
     onClick={addValue}
     >Add value </button>
     <br />
     <br />
     <button
     onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
