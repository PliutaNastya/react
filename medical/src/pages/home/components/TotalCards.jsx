function TotalCards({patients, doctors, appointments}) {
	return (
		<ul className="total-list">
			<li className="card">
				<h3>Загальна кількість пацієнтів:</h3>
				<div>{patients}</div>
			</li>
			<li className="card">
				<h3>Загальна кількість лікарів:</h3>
				<div>{doctors}</div>
			</li>
			<li className="card">
				<h3>Загальна кількість записів:</h3>
				<div>{appointments}</div>
			</li>
		</ul>
	)
}

export default TotalCards