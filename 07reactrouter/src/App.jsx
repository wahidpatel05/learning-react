import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="flex justify-center items-center bg-gray-900 text-white min-h-screen">
  <div className="flex items-center space-x-4 border border-pink-700 p-4 rounded">
    <h1 className="text-2xl font-bold">Vite + React</h1>
    <h1 className="text-2xl font-bold text-pink-500">React Router Course</h1>
  </div>
</div>

  )
}

export default App
