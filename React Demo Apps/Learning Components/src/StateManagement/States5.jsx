//creating a basic todo list with react
import { useState } from 'react'
import './States5.css'
const DisplayTasks = ({ tasks, completedTasks, markComplete, markIncomplete }) => {
  return (
    <>
      {
        tasks.map((val, idx) => {
          return (
            <div key={idx} id='todo-list-container'>
              
              {
                completedTasks.includes(val) ?
                  <span key={idx} id='todo-list-container'>
                    <li>{val}</li>
                    <li>{"🟢"}</li>
                    <li>
                      <button onClick={() => {
                        markIncomplete(idx)
                      }}>
                        Reset
                      </button>
                    </li>
                  </span>
                  :
                  <span key={idx} id='todo-list-container'>
                    <li>{val}</li>
                    <li>{"🟡"}</li>
                    <li>
                      <button onClick={() => {
                        markComplete(idx)
                      }}>
                        Done
                      </button>
                    </li>
                  </span>
              }
            </div>
          )
        })
      }
    </>
  )
}
const States5 = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  const [text, setText] = useState('');
  const handleChange = function (event) {
    setText(event.target.value)
  }
  const addTask = () => {
    if (tasks.includes(text)) return;
    setTasks([...tasks, text]);
  }

  const markComplete = (idx) => {
    console.log(`Task ${tasks[idx]} completed`)
    setCompletedTasks([...completedTasks, tasks[idx]])
  }

  const markIncomplete = (idx) => {
    let newCompletedTaskList = []
    for (let i = 0; i < completedTasks.length; i++) {
      if (completedTasks[i] === tasks[idx]) continue;
      newCompletedTaskList.push(completedTasks[i])
    }
    setCompletedTasks(newCompletedTaskList);
    console.log(`Task ${tasks[idx]} added to queue again`)
  }
  return (
    <>
      <input type='text' onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>

      <DisplayTasks tasks={tasks} completedTasks={completedTasks} markComplete={markComplete} markIncomplete={markIncomplete} />

    </>
  )
}

export default States5

/**
 * Requirements
 * a list of tasks
 * 
 */
