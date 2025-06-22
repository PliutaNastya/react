import TodoItem from './TodoItem'

function TodoList({ tasksList, onComplete, onDelete, setTasksList }) {
  return (
	  <div style={{ display: 'grid', gap: '15px' }}>
      <h1>Список задач</h1>
      {tasksList.map((task) => (
        <TodoItem
          key={task.id}
          {...task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
      <hr />
      <button onClick={() => setTasksList([])}>Clear list</button>
    </div>
  )
}

export default TodoList
