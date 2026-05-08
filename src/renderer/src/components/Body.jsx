import React, { useState } from 'react'
import InputField from './InputField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Body = ({ isOverlay }) => {
  const [isEditing, setIsEditing] = useState(true)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [hours, setHours] = useState(0)
  return (
    <div>
      {isEditing ? (
        //editing component
        <div className="flex justify-center">
          <div>
            <InputField
              label={'Hours'}
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
            />
            <InputField
              label={'Minutes'}
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <InputField
              label={'Seconds'}
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            <button
              className="bg-blue-500 text-stone-200 px-20 py-1 rounded-xl text-xl mt-1 ml-1"
              onClick={setIsEditing(false)}
            >
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      ) : (
        //timer components
        <div></div>
      )}
    </div>
  )
}

export default Body
