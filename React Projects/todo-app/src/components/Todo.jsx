// import { useContext } from "react";
import { useState } from "react";
// import TodoContext from "../context/TodoContext";

const Todo = ({ content, id, isFinished, editTodo, finishTodo, deleteTodo }) => {
  console.log(`finished for ${id} is ${isFinished}`)
  // const { todoDispatch } = useContext(TodoContext);
  const [text, setText] = useState(content)
  const [isEditing, setIsEditing] = useState(false)
  return (
    <div className='whole-todo-container'>

      {
        isEditing ?
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          :
          <span>{content}</span>
      }

      <button
        onClick={() => {
          if (isEditing) {
            editTodo(text, id)
            setIsEditing(false)
          } else {
            setIsEditing(true)
          }
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>

      <button
        onClick={() => {
          finishTodo(id)
        }}
      >
        {isFinished ? "Redo" : "Finish"}
      </button>

      <button
        onClick={() => {
          deleteTodo(id)
        }}
      >
        Delete
      </button>

    </div>
  )
}

export default Todo
