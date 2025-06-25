import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] = useState(15)

  const addValue =  () =>{
      // setCounter(counter+1) 
      // setCounter(counter+1) 
      // setCounter(counter+1) 
      //  setCounter(counter+1) 
      // setCounter(counter+1) 

      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)

      // now it will increase the value by 5
  }
 const removeValue =  () =>{
    // setCounter(counter-1) 
    //  setCounter(counter-1) 
    //   setCounter(counter-1) 
    setCounter(puranaCOunter => puranaCOunter-1)
      setCounter(puranaCOunter => puranaCOunter-1)
      setCounter(puranaCOunter => puranaCOunter-1)

      // now it will dectrese the value by 3 

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
