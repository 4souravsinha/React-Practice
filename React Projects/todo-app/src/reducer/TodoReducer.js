function TodoReducer(state , action){
  let id = 0;
  if(action.type === 'add_todo'){
    const newTodo = {
      "id": ++id,
      "content": action.payload.value,
      "isFinished": false
    }
    const newState = [...state , newTodo]
    return newState
  }
  else if(action.type === 'edit_todo'){
    const newState = state.map((todo)=>{
      if(todo.id === action.payload.id){
        todo.content = action.payload.content
      }
      return todo
    })
    return newState
  }
  else if(action.type === 'finish_todo'){
    const newState = state.map((todo)=>{
      if(todo.id === action.payload.id){
        todo.isFinished = !todo.isFinished
      }
      return todo
    })
    return newState
  }
  else if(action.type === 'delete_todo'){
    const newState = state.filter((todo)=>{
       return todo.id !== action.payload.id
    })
    return newState
  }
  return state
}

export default TodoReducer;
