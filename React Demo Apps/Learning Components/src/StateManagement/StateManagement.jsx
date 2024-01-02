/**
 * 1) What are hooks? 
 * --> React utility functions that help use to use core features of React.
 * Eg - useState - to manage state in functional components
 *     useEffect - to manage side effects in functional components
 *     useContext - to use context in functional components
 * 2) State in react - Remembers state between re-renders
 *    --eg - const [count , setCount] =  useState(0)
 *           in the above example count is the state variable and setCount is the function to update the state      variable
 *    
 */

import { useState } from 'react'
import './StateManagement.css'

let globalNormalVariable = 0
const StateManagement = () => {
  let normalVariable = 0
  const [stateVariable, setStateVariable] = useState(0)
  return (
    <div className = 'state-manager-wrapper'>
      <div className ='value-display'>
        <h1>State Variable - {stateVariable}</h1>
        <h1>Normal Variable - {normalVariable}</h1>
        <h1>Global Normal Variable - {globalNormalVariable}</h1>
      </div>
      <div id='value-button'>
        <button onClick={() => {setStateVariable(stateVariable + 1)}}>Increment State Variable</button>
        <button onClick={() => normalVariable = normalVariable + 1}>Increment normal Variable</button>
        <button onClick={() => globalNormalVariable = globalNormalVariable + 1}>
          Increment global normal Variable
        </button>
      </div>
      <div className='lessons'>
        <h3>Observations</h3>
        <ul>
          <li>State variable is updated and the component is re-rendered</li>
          <li>Normal variable is updated but the component is not re-rendered </li>
          <li>Global normal variable is updated but the component is not re-rendered but the value gets rebndered on clicking increment state variable </li>
        </ul>
      </div>
    </div>
  )
}

export default StateManagement
