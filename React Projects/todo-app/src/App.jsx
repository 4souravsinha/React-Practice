import TodoContext from './context/TodoContext'
import TodoReducer from './reducer/TodoReducer'
import './App.css'
import TodoList from './components/TodoList'
import { useReducer } from 'react'

function App() {

  const [todo, dispatch] = useReducer(TodoReducer , []);
  return (
    <TodoContext.Provider value={{ todo: todo, todoDispatch: dispatch }}>
      <TodoList />
    </TodoContext.Provider>
  )
}

export default App
