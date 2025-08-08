import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline text-green-600">Hello world!</h1>
    <Card username = "wahid" className='mb-8'/>
    <Card username='Himanshu' />
    <Card />
    </>
  )
}

export default App
