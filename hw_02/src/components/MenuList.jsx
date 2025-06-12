function MenuList({ onSelect }) {
	return (
		<>
			<nav className="menu">
				<ul className="menu-list">
					<li className="menu-item">
						<button className="menu-button" type="button" onClick={() => onSelect(1)}>Задача 01</button>
					</li>
					<li>
						<button className="menu-button" type="button" onClick={() => onSelect(2)}>Задача 02</button>
					</li>
					<li>
						<button className="menu-button" type="button" onClick={() => onSelect(3)}>Задача 03</button>
					</li>
					<li>
						<button className="menu-button" type="button" onClick={() => onSelect(4)}>Задача 04</button>
					</li>
					<li>
						<button className="menu-button" type="button" onClick={() => onSelect(5)}>Задача 05</button>
					</li>
					<li>
						<button className="menu-button" type="button" onClick={() => onSelect(6)}>Задача 06</button>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default MenuList