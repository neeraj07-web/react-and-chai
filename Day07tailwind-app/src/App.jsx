import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj= {
    username :"neeraj",
    age :21
  }
let newArr= [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl  mb-5'>Talwind Test</h1>
   <Card username="Neeraj" position="Software Engineer" address="Jammu"/>
   <Card username="Sarah" position="Web Developer" address="Bangalore"/>
    </>
  )
}

export default App
