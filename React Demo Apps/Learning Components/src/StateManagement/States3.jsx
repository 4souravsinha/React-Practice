// import React from 'react'
import { useState } from "react"

const StateVariableIncrementer = () => {
  const [stateVariable, setStateVariable] = useState(0)
  return (
    <div id='value-button'>
      <span>State Variable - {stateVariable}</span>
      <button onClick={() => {setStateVariable(stateVariable + 1)}}>Increment State Variable</button>
    </div>
  )
}

const States3 = () => {
  return (
    <div id='container'>

    <StateVariableIncrementer />
    <StateVariableIncrementer />


    <h4>Observations</h4>
    <ul>
      <li>We imported states 2 component 2 times</li>
      <li>Clearly both the instances behave differently</li>
      <li>So we can say that components are copy pasted and not referenced</li>
    </ul>
    </div>

  )
}

export default States3
