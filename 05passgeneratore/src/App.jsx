import { useState,useCallback,useEffect } from 'react'

import './App.css'

function App() {
  const[length,setLength] = useState(8)
  const[numberAllowed,setNumberAllowed] = useState(false)
  const[charAllowed,setCharAllowed] = useState(false)
  const[password,setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed == true ) str += "0123456789"
    if(charAllowed == true) str += "!@#$%^&*()_+[]"
    for(let i=1;  i <= length; i++){
      const char =  Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed])

  const copyPassword = ()=> {
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    generatePassword()
  },[length, numberAllowed, charAllowed])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-950cd px-4">  
      <div className="bg-[#8181a1] border border-gray-400 rounded-lg p-8">
  <h1 className="text-black font-bold text-4xl mb-6 text-center">
    Password Generator
  </h1>

  <div className="flex shadow rounded-full overflow-hidden mb-4">
    <input
      type="text"
      value={password}
      className="outline-none w-full py-2 px-4 bg-purple-200 text-black placeholder-gray-600"
      placeholder="Password"
      readOnly
    />
    <button 
    onClick={copyPassword}
    className="cursor-pointer outline-none px-4 py-2 text-white bg-black font-bold">
      Copy
    </button>
  </div>
  
{/* //Length range */}
  <div
  className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-2'>
      <input 
      type="range"
      min={6}
      max={50}
      value={length}
      className='cursor-pointer'
      onChange={(e) => setLength(e.target.value)}
      />
      <label htmlFor="length" className='text-black font-bold'>Length: {length}</label>

    </div>

{/* //Number checkbox */}
    <div
  className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-2'>
      <input 
      className='cursor-pointer'
      type="checkbox"
      defaultChecked={numberAllowed}
      onChange={() => {
        setNumberAllowed((prev) => !prev)
      }}
      
      />
      <label htmlFor="number" className='text-black font-bold'>Numbers</label>

    </div>

{/* Character */}
    <div
  className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-2'>
      <input 
      className='cursor-pointer'
      type="checkbox"
      defaultChecked={charAllowed}
      onChange={() => {
        setCharAllowed((prev) => !prev)
      }}
      
      />
      <label htmlFor="character" className='text-black font-bold'>Character</label>

    </div>
    
  



  </div>
  </div>
  </div>
</div>
    </div>

  )
}

export default App
