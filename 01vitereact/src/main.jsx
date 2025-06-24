import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

// function MyApp banaya and uske nadar jsx likh diya hai
function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}
// creating reactElement as per our choice
// const ReactElement={
//     type:'a',
//     props :{
//         href :'https://google.com',
//         target: '_blank'
//     },
//     children : 'Click me to visit Google'
// }


const anotherUser=" chai and react"
// making react  element as per the REACT
 // {tag , val}
 // react ka khud ka method use karke hum ek child banayenge , using react. createElement with predefined syntax, idhar type , props yeh sab nahi likhenge
const ReactElement=React.createElement(
   'a',
   {href : 'https://google.com', target:'_blank'},
   'click me to visit GOOGLE',anotherUser
)

const anotherElement=(
  <a href='https://google.com' target='_blank'>Visit Google</a>
)
createRoot(document.getElementById('root')).render(
  
  reactElement // can also be paased as a function ie App() or MyApp
)
