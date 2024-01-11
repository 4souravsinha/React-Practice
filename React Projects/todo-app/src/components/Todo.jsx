// import { useContext } from "react";
// import { useState } from "react";
// import TodoContext from "../context/TodoContext";

const Todo = ({ content, id, isFinished }) => {
  // const { todosDispatch } = useContext(TodoContext);
  // const [text, setText] = useState(content)
  // const [isEditing, setIsEditing] = useState(false)
  return (
    <div className='whole-todo-container'>
      
      {
          <span>{content}</span>
      }

      <button
      >
        {"Save"}
      </button>
    </div>
  )
}

export default Todo
