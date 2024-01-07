import { useState } from 'react'
import './States5.css'

const EditButton = (props) => {
  return (
    <button onClick={() => {
      props.isEditing && props.saveEdit()
      props.setIsEditing(!props.isEditing)
    }
    }>
      {"Edit"}
    </button>
  )
}

const TodoItem = (props) => {
  const [finished, setFinished] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editBoxVal, setEditBoxVal] = useState('')
  return (
    <ul id={props.item.id} >
      {
        isEditing ?
          <input value={editBoxVal} onChange={(e) => {
            setEditBoxVal(e.target.value);
          }} />
          :
          <li>{props.item.data}</li>
      }
      <li>
        <button onClick={() => setFinished(!finished)} >
          {finished ? "Redo" : "Done"}
        </button>
        <EditButton setIsEditing={setIsEditing} isEditing={isEditing} />
      </li>
    </ul>
  )
}

const Todo = (props) => {

  const [items, setItems] = useState([
    { data: 'item1', id: 1 },
    { data: 'item2', id: 2 },
    { data: 'item3', id: 3 }
  ]);

  const saveEdit = (id , newTodo)=>{
    const newData = items.map((val)=>{
      if(val.id === id){
        return {data: newTodo , id: id}
      }
      return {data: val.data , id: val.id}
    })
    setItems(newData)
  }
  
  const todoItems = items.map((item) => {
    return <TodoItem item={item} key={item.id} />
  })
  // console.log(todoItems);
  return <div>{todoItems}</div>
}

const States5 = () => {

  return (
    <Todo />
    // <div>Hello</div>
  )
}

export default States5
