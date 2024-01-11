import { useContext } from "react"
import React from "react"
import TodoContext from "../context/TodoContext"
import Todo from "./Todo"
import { useCallback } from "react"
const MemoizedTodo = React.memo(Todo)

const TodoList = () => {
  const { todos, todoDispatch } = useContext(TodoContext)
  const editTodo = useCallback( (id, text) => {
    todoDispatch({
      type: 'edit_todo', payload: {
        content: text,
        id: id
      }
    })
  }, [todoDispatch]);

  const finishTodo = useCallback((id) => {
    todoDispatch({
      type: 'finish_todo', payload: {
        id: id
      }
    })
  }, [todoDispatch]);

  const deleteTodo = useCallback((id) => {
    todoDispatch({
      type: 'delete_todo', payload: {
        id: id
      }
    })
  }, [todoDispatch]);

  const todosAsList = todos.map((todo) => {
    return (
      <MemoizedTodo
        content={todo.content}
        id={todo.id}
        isFinished={todo.isFinished}
        key={todo.id}
        editTodo = {editTodo}
        finishTodo = {finishTodo}
        deleteTodo = {deleteTodo}
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
