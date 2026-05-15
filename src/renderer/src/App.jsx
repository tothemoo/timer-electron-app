import { useEffect, useState } from 'react'
import Body from './components/Body'
import Topbar from './components/Topbar'
import InputField from './components/InputField'

function App() {
  const [isOverlay, setIsOverlay] = useState(false)
  useEffect(() => {
    window.electron.ipcRenderer.on('overlay-mode', () => {
      setIsOverlay((prevState) => !prevState)
    })
    return () => {
      window.electron.ipcRenderer.removeAllListeners('overlay-mode')
    }
  }, [])
  return (
    <>
      <Topbar />
      <div className="bg-black bg-opacity-40 p-2">
        <Body />
      </div>
    </>
  )
}

export default App
