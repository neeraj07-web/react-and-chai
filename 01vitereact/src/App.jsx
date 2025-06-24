import Chai from "./chai"

function App() {

  const username= "NEERAJ KUMAR"
  
  // {} is a evaluated expression
  return (
    <>
  <Chai/>
  {/*  jahan v {} hoga uske andar ko hum as a variable treat karenge */ }
  <h1>chai aur react {username}</h1>  
  <P> test para</P>

  </>
  )
}

export default App
