import { useState } from 'react'

import './App.css'
import NotesApp from './components/NotesApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <NotesApp/>
    </div>
  )
}

export default App
