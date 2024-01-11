let id = 0
function TodoReducer(state , action){
  if(action.type === 'add_todo'){
    const newTodo = {
      "id": ++id,
      "content": action.payload.content,
      "isFinished": false
    }
    const newState = [...state , newTodo]
    return newState
  }
  else if(action.type === 'edit_todo'){
    const newState = state.map((todo)=>{
      if(todo.id === action.payload.id){
        return {...todo , content: action.payload.content}
      }
      return todo
    })
    return newState
  }
  else if(action.type === 'finish_todo'){
    const newState = state.map((todo)=>{
      if(todo.id === action.payload.id){
        return {...todo , isFinished: !todo.isFinished}
      }
      return todo
    })
    console.log(newState)
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
