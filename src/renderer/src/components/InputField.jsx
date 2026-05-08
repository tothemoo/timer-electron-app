import React from 'react'

const InputField = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="text-3xl">
      <label className="text-stone-300">{label}:</label>
      <input
        className="w-20 bg-transparent text-blue-400"
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </div>
  )
}

export default InputField
