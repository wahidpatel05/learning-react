import { useEffect, useState } from 'react'
import './App.css'
import Theme from './components/Theme'
import Card from './components/Card'
import { ThemeProvider } from './context/Theme'

function App() {
  const [theme, setTheme ] = useState("light")

  const darkTheme = () => {
    setTheme('dark')
  }

  const lightTheme = () => {
    setTheme('light')
  }

  useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [theme]);


  return (
    <ThemeProvider value={{theme, darkTheme, lightTheme}}>
    <div className='flex flex-wrap min-h-screen items-center'>
      <div className='w-full'>
        <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
          <Theme/>
        </div>
        <div className='w-full max-w-sm mx-auto'>
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
