// import React from 'react'
import { useState } from "react"
const States4 = () => {
  const [text, setText] = useState('')
  function handleTextChange(event) {
    setText(event.target.value)
  }
  return (
    <>
      <input type='text' onChange={handleTextChange} />
      <span>The new text is {text}</span>
      <div>
        <h4>Observations</h4>
        <ul>
          <li>On editing the text area the text is printed simulataneously</li>
          <li>React eases 2 way binding</li>
          <li>2 way binding means change at one place can be seen at other place</li>
        </ul>
      </div>
    </>
  )
}

export default States4
