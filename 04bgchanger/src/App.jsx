import { use, useState } from 'react'

import './App.css'

function App() {
  const [color,setcolor] = useState('olive')
  const [message,setMessage] = useState('This is Olive Color')
  function changeColor(color){
    setcolor(color)
  }
  
  function display(color){
    setMessage(`This is ${color} color`)
  }
  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>
      <h1 className='flex flex-wrap justify-center text-3xl p-10 font-bold duration-200'>{message}</h1>
      <div className='fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-centre gap-3 shadow-lg bg-white   px-3 py-2 rounded-3xl'>
          
          <button 
          onClick={() => {setcolor('red')
            display('red')
           }}
          className='outline=none px-3 py-1 rounded-full  text-black shadow-xl bg-red-600  font-bold'>Red</button>

          <button 
          onClick={() => {setcolor('green')
            display('green')
           }} 
          className='outline=none px-3 py-1 rounded-full  text-black shadow-lg bg-green-600 font-bold'>Green</button>

          <button 
          onClick={() => {setcolor('blue')
            display('blue')
          }}
          className='outline=none px-3 py-1 rounded-full  text-black shadow-lg bg-blue-600 font-bold'>Blue</button>

          <button 
          onClick={() => {setcolor('yellow')
            display('yellow')
          }}
          className='outline=none px-3 py-1 rounded-full  text-black shadow-lg bg-yellow-400 font-bold'>Yellow</button>
          

        </div>

      </div>
    </div>
  )
}

export default App
