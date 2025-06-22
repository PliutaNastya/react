function TodoItem({ id, task, completed, onComplete, onDelete }) {
  return (
    <div
		  style={{ display: 'grid', gap: '15px', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }}
    >
      <div>{task}</div>
      <div>{completed ? 'Завершена' : 'Не завершена'}</div>
		  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <button onClick={() => onComplete(id)}>Complete</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
