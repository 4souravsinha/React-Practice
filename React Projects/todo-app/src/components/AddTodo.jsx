import { useState, useContext } from 'react'
import TodoContext from '../context/TodoContext'
const AddTodo = () => {
  const { todoDispatch } = useContext(TodoContext)
  const [text, setText] = useState('')
  return (
    <div className='add-todo-wrapper'>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {
        todoDispatch(
          {
            type: "add_todo",
            payload: {
              content: text
            }
          }
        )
        setText('')
      }
      }
      >
        Add Todo
      </button>
    </div>
  )
}

export default AddTodo
