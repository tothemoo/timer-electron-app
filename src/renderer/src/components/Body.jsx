import React, { useState, useEffect } from 'react'
import InputField from './InputField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCirclePlay,
  faStop,
  faCheck,
  faPenToSquare,
  faPause
} from '@fortawesome/free-solid-svg-icons'
const Body = ({ isOverlay }) => {
  const [isEditing, setIsEditing] = useState(true)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [hours, setHours] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let intervalId

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1)
        } else {
          if (minutes === 0 && hours === 0) {
            clearInterval(intervalId)
            setIsActive(false)
          } else {
            if (minutes === 0) {
              setHours((hours) => hours - 1)
              setMinutes(59)
            } else {
              setMinutes((minutes) => minutes - 1)
            }
            setSeconds(59)
          }
        }
      }, 1000)
    }
  })
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
              className="bg-blue-500 text-stone-200 px-20 rounded-xl"
              onClick={() => setIsEditing(false)}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>
        </div>
      ) : (
        //timer components
        <>
          <div className="flex justify-center">
            <h1 className="text-green-500 text-6xl">{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`}</h1>
          </div>
          <div
            id="timer-button"
            className="text-stone-500 flex justify-center bg-black bg-opacity-40 rounded-xl"
          >
            {isActive ? (
              <>
                <button className="text-green-500 text-2xl">
                  <FontAwesomeIcon icon={faPause} />
                </button>
                <button className="text-green-500 text-2xl">
                  <FontAwesomeIcon icon={faStop} />
                </button>
              </>
            ) : (
              <>
                <button className="text-green-500 text-2xl">
                  <FontAwesomeIcon icon={faCirclePlay} />
                </button>
                <button className="text-green-500 text-2xl" onClick={() => setIsEditing(true)}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Body
