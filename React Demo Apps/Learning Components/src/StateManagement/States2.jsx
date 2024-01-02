

import { useState } from 'react'
import './States2.css'

const States2 = () => {

  const [stateVar1, setStateVar1] = useState(0)
  const [stateVar2, setStateVar2] = useState(0)
  return (
    <div className = 'state-manager-wrapper'>
      <div className ='value-display'>
        <h1>State Variable 1 - {stateVar1}</h1>
        <h1>State Variable 2 - {stateVar2}</h1>
      </div>
      <div id='value-button'>
        <button onClick={() => {setStateVar1(stateVar1 + 1)}}>Increment State Variable 1</button>
        <button onClick={() => {setStateVar2(stateVar2 + 1)}}>Increment State Variable 2</button>
      </div>
      <div className='lessons'>
        <h3>Observations</h3>
        <ul>
         <li>State variables retain there values even if other state variables change</li>
         <li>State variables updated values gets displayed immediately.</li>
        </ul>
      </div>
    </div>
  )
}

export default States2
