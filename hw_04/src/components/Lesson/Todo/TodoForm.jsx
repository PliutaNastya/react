import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [task, setTask] = useState(null)
  return (
    <div>
      <div>
        Task
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button onClick={() => onAdd(task)}>Add task</button>
    </div>
  )
}

export default TodoForm
