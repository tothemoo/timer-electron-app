import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinimize, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons'
export default function Topbar() {
  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }

  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }

  return (
    <div className="topbar-section">
      <div className="topbar rounded-t-xl bg-blue-400 w-screen h-5"></div>
      <div className=" bg-blue-400 w-screen h-5"></div>
      <div className="control-buttons absolute top-0 right-0 text-stone-200">
        <button className="minimize p-1" onClick={handleMinimize}>
          <FontAwesomeIcon icon={faWindowMinimize} />
        </button>
        <button className="close p-1" onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  )
}
