

/// useEffect -> 2 parameters (callback , dependencies array) same as the useCallback 
// useCallback takes 2 parameter , one is the function and the other one is dependencies --. the dependencies are in the form of the array
// useCallback{function , dependencies}

// useCallback optimize the code , or we can say that it will mwmoize the code , it is optional to use it --> even if we dont use it , it will be alright

import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  // useRef hook ko use karne k liye uske liye ke variable banana padta hai
  const passwordRef = useRef(null) // defaulat abhi mere pass kuch hai nahi toh meine null de diya

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"// if numbers are allowed then use them in the password
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      // generating a character from 1 to the lengtyh of the string defined 
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) // at which place you want the charcter
      
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  // method to copy the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // use of passwordRef ---> ? means optional hai ki sekect karni ahai ya nahi 
    passwordRef.current?.setSelectionRange(0, 999); // defining the range ki kitna range select karna hai
    // if i gve the range as (0,3) then it would have selcted the 3 characters only
    window.navigator.clipboard.writeText(password) // here we are using window object in case of react , in case of next.js --> there will be sever side rendering 
  }, [password])// (function , dependencies-->array)

  // use of useEffect
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // useRef ka use aya ana
        />
        <button
             //  upar ais ek method banaya hua hai
        onClick={copyPasswordToClipboard} // line 66 can now ind of talk with line 21
   
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App