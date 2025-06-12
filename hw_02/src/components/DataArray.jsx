// Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого.

import task5Img from '../assets/img/task_05.png'
import w3sLogo from '../assets/img/w3schools_logo.png'
import reactLogo from '../assets/img/react_logo.svg'

function DataArray() {
	const data = [
		{
			id: '1',
			logo: w3sLogo,
			siteName: "W3SchoolsUA",
			url: "https://w3schoolsua.github.io",
			title: "React Підручник - W3Schools українською - GitHub Pages",
			description: "React - це бібліотека JavaScript для створення інтерфейсів користувача. React використовується для створення односторінкових програм. React дозволяє нам …"
		},
		{
			id: '2',
			logo: reactLogo,
			siteName: "React",
			url: "https://uk.legacy.reactjs.org",
			title: "Посібник: знайомство з React",
			description: "Цей посібник не потребує попереднього ознайомлення з React. Перед початком роботи. У цьому посібнику ми працюватимемо над створенням маленької гри."
		},
		{
			id: '3',
			logo: w3sLogo,
			siteName: "W3SchoolsUA",
			url: "https://w3schoolsua.github.io",
			title: "React Старт - W3Schools українською",
			description: "Підручник React. Старт. React безпосередньо в HTML. Налаштування середовища React. Запустили програму React. Змінили програму React. Що далі?"
		}
	]


	return (
		<>
			<div className="task">
				<h2>Умова</h2>
				<div className="task-inner">
					<p>Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого.</p>
					<img className='task-img' src={task5Img} alt="" />
				</div>
			</div>
			<div className='data-cnt'>
				<ul>
					{data.map(item => (
						<li key={item.id}>
							<a href={item.url} target='_blank' rel="noopener noreferrer">
								<div className='data-header'>
									<img src={item.logo} alt={item.siteName} />
									<div>
										<p>{item.siteName}</p>
										<span>{item.url}</span>
									</div>
								</div>
								<div className="data-body">
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default DataArray