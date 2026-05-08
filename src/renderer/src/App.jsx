import { useState } from 'react'
import Body from './components/Body'
import Topbar from './components/Topbar'
import InputField from './components/InputField'

function App() {
  const [isOverlay, setIsOverlay] = useState(false)

  return (
    <>
      <Topbar />
      <Body />
      
    </>
  )
}

export default App
