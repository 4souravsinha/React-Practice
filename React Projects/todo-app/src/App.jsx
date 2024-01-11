import TodoContext from './context/TodoContext'
import TodoReducer from './reducer/TodoReducer'
import './App.css'
import TodoList from './components/TodoList'
import { useReducer} from 'react'
import AddTodo from './components/AddTodo'

function App() {

  const [todos, dispatch] = useReducer(TodoReducer , []);

  return (
    <TodoContext.Provider value={{ todos: todos, todoDispatch: dispatch }}>
      <AddTodo/>
      <TodoList />
    </TodoContext.Provider>
  )
}

export default App
