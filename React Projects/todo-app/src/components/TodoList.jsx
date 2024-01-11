import { useContext } from "react"
import React from "react"
import TodoContext from "../context/TodoContext"
import Todo from "./Todo"
const MemoizedTodo = React.memo(Todo)

const TodoList = () => {
  const { todos } = useContext(TodoContext)

  const todosAsList = todos.map((todo) => {
    return (
      <MemoizedTodo
        content={todo.content}
        id={todo.id}
        isFinished={todo.isFinished}
        key={todo.id}
      />
    )
  })
  return (
    <div className='todo-list-wrapper'>
      {todosAsList}
    </div>
  )
}

export default TodoList
