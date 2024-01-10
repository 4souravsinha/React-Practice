import { useState } from 'react'
import './States5.css'
import React, {useCallback} from 'react'

const EditButton = (props) => {
  return (
    <button className="todo-button" onClick={
      props.isEditing ?
        () => {
          props.saveEdit(props.id, props.editBoxVal)
          props.setIsEditing(!props.isEditing)
        }
        :
        () => props.setIsEditing(!props.isEditing)
    }>
      {props.isEditing ? "Done" : "Edit"}
    </button>
  )
}

const TodoItem = React.memo(function TodoItem (props) {
  const [finished, setFinished] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editBoxVal, setEditBoxVal] = useState('')
  return (
    <ul id={props.item.id} className='todo-instance' >
      {
        isEditing ?
          <input value={editBoxVal} onChange={(e) => {
            setEditBoxVal(e.target.value);
          }} />
          :
          <li>{props.item.data}</li>
      }
      <li>
        <button className="todo-button" onClick={() => setFinished(!finished)} >
          {finished ? "Redo" : "Done"}
        </button>
        <EditButton
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          id={props.item.id}
          editBoxVal={editBoxVal}
          saveEdit={props.saveEdit}
        />
      </li>
    </ul>
  )
})

const Todo = () => {

  const [newItemVal , setNewItemVal] = useState('')
  const [items, setItems] = useState([
    { data: 'item1', id: 1 },
    { data: 'item2', id: 2 },
    { data: 'item3', id: 3 }
  ]);

  const saveEdit = useCallback((id, newTodo) => {

    const newData = items.map((val) => {
      if (val.id === id) {
        return { data: newTodo, id: id }
      }
      return { data: val.data, id: val.id }
    })
    setItems(newData)

  },[items]);

  const todoItems = items.map((item) => {
    return <TodoItem item={item} key={item.id} saveEdit={saveEdit} />
  })
  // console.log(todoItems);
  return (
    <>
      <input value={newItemVal} onChange={(e)=>setNewItemVal(e.target.value)}></input>
      <button className="todo-button" onClick={()=>{
        setItems([...items , {data: newItemVal , id: (new Date()).getTime() }])
        setNewItemVal('')
      }}>
        Add Task
      </button>
      <div>{todoItems}</div>
    </>
  )
}

const States5 = () => {

  return (
    <>

    <h4>Todo List</h4>
    <Todo />
    </>
  )
}

export default States5
