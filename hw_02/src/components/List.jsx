// Вивести список як маркований список з елементами у форматі(name: salary)

function List() {
	const workersList = [
		{
			id: '111',
			name: 'Іванов',
			salary: 10000,
		},
		{
			id: '112',
			name: 'Петров',
			salary: 20000,
		},
		{
			id: '113',
			name: 'Сидоров',
			salary: 50000,
		},
	]
	return (
		<>
			<div className="task">
				<h2>Умова</h2>
				<div className="task-inner">
					<p>Вивести список як маркований список з елементами у форматі (name: salary)</p>
					<pre>
						<code>
							{`workersList2: [
	{
		id: '111',
		name: 'Іванов',
		salary: 10000,
	},
	{
		id: '112',
		name: 'Петров',
		salary: 20000,
	},
	{
		id: '113',
		name: 'Сидоров',
		salary: 50000,
	},
]`}
						</code>
					</pre>
				</div>
			</div>
			<ul className='list-cnt'>
				{
					workersList.map(el => <li key={el.id}>{el.name}: {el.salary}грн</li>)
				}
			</ul>
		</>
	)
}

export default List