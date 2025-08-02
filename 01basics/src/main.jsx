import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const areactElement = React.createElement(
    'a',
    {href : "https://todo-list-murex-tau-19.vercel.app/" , target : "_blank"},
    "Check out my project made using .js"
)

createRoot(document.getElementById('root')).render(
    <>
    {areactElement}
    <App />
    </>
    
 
)
