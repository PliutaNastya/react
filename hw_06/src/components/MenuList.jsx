function MenuList({ tasks, onSelect }) {
	return (
		<>
			<nav className="menu">
				<ul className="menu-list">
					{
						tasks.map(task => (
							<li className="menu-item" key={task.id}>
								<button type="button" onClick={() => onSelect(task.id)}>{task.name}</button>
							</li>
						))
					}

				</ul>
			</nav>
		</>
	)
}

export default MenuList