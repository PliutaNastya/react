// На кухню поступають замовлення.Спочатку ми додаємо їх у список “Очікують на виконання”, якщо повар береться робити — замовлення переходить у список “Виконуються”,   якщо замовлення виконано — переходить у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці. Підказка: тут треба зберігати 3 масиви страв ( waitingList, processingList, completedList).

import { useState } from 'react';
import task6Img from '../../assets/img/task_06.png';
import KitchenMenu from './KitchenMenu';

function KitchenOrdersManager() {

	const [dish, setDish] = useState('')
	const [waitingList, setWaitingList] = useState([])
	const [processingList, setProcessingList] = useState([])
	const [completedList, setCompletedList] = useState([])

	const addDishToWaitingList = () => {

		const newDishObj = {
			id: Date.now(),
			dishName: dish.trim()
		}

		if (!newDishObj.dishName) return

		setWaitingList(prev => [...prev, newDishObj])
		setDish('')
	}

	const addToProcessingList = (id) => {
		const dish = waitingList.find(el => el.id === id)
		if (!dish) return

		setProcessingList(prev => [...prev, dish])
		setWaitingList(prev => prev.filter(el => el.id !== id))
	}

	const addToCompletedList = (id) => {
		const dish = processingList.find(el => el.id === id)
		if (!dish) return

		setCompletedList(prev => [...prev, dish])
		setProcessingList(prev => prev.filter(el => el.id !== id))
	}

	const removeDish = (id) => {
		const dish = completedList.find(el => el.id === id)
		if (!dish) return

		setCompletedList(prev => prev.filter(el => el.id !== id))
	}

	console.log(waitingList)
	console.log(processingList)
	console.log(completedList)

	return (
		<>
			<div className="task">
				<h2>Умова</h2>
				<div className="task-inner">
					<p>На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на виконання”, якщо повар береться робити — замовлення переходить у список “Виконуються”,   якщо замовлення виконано — переходить у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці.</p>
					<img className='task-img' src={task6Img} alt="" />
					<p>Підказка: тут треба зберігати 3 масиви страв ( waitingList, processingList, completedList).</p>
				</div>
			</div>

			<div className="kitchen-cnt">
				<div>
					<h3>Меню</h3>
					<KitchenMenu />
				</div>
				<div className="input-cnt">
					<label htmlFor='dish'>Нова замовлена страва:</label>
					<input type="text" name='dish' id='dish' value={dish} onChange={(e) => setDish(e.target.value)} />
					<button type='button' className='button' onClick={() => addDishToWaitingList()}>Додати</button>
				</div>
				<div className="result-cnt">
					<div className="dishes-cnt">
						<h3>Очікують на виконання</h3>
						{!waitingList.length ? <p>Замовлень нема</p> : <ul>
							{
								waitingList.map(dish => (
									<li key={dish.id}>
										<h4>{dish.dishName}</h4>
										<button type='button' className='button' onClick={() => addToProcessingList(dish.id)}>Готувати</button>
									</li>
								))
							}
						</ul>}
					</div>
					<div className="dishes-cnt">
						<h3>Виконуються</h3>
						{!processingList.length ? <p>Замовлень нема</p> :
							<ul>
								{
									processingList.map(dish => (
										<li key={dish.id}>
											<h4>{dish.dishName}</h4>
											<button type='button' className='button' onClick={() => addToCompletedList(dish.id)}>Приготовлено</button>
										</li>
									))
								}
							</ul>
						}
					</div>
					<div className="dishes-cnt">
						<h3>Готові до виносу</h3>
						{!completedList.length ? <p>Замовлень нема</p> :
							<ul>
								{
									completedList.map(dish => (
										<li key={dish.id}>
											<h4>{dish.dishName}</h4>
											<button type='button' className='button' onClick={() => removeDish(dish.id)}>Подано</button>
										</li>
									))
								}
							</ul>
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default KitchenOrdersManager