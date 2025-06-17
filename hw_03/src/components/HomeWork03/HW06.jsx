// Дано список автомобілів(марка, рік випуску, ціна).Сформувати елементи для фільтрування з використанням випадаючого списку(контент цих випадаючих списків сформувати у залежності від переданого списку).
import { useState } from "react"


function HW06() {
	const cars = [
		{ id: 1, brand: "Toyota", year: 2020, price: 18000 },
		{ id: 2, brand: "Ford", year: 2019, price: 15000 },
		{ id: 3, brand: "BMW", year: 2021, price: 30000 },
		{ id: 4, brand: "Honda", year: 2020, price: 17000 },
		{ id: 5, brand: "Mercedes", year: 2022, price: 40000 },
		{ id: 6, brand: "Audi", year: 2018, price: 28000 },
		{ id: 7, brand: "Nissan", year: 2019, price: 16000 },
		{ id: 8, brand: "Volkswagen", year: 2021, price: 22000 },
		{ id: 9, brand: "Hyundai", year: 2022, price: 19000 },
		{ id: 10, brand: "Kia", year: 2020, price: 17500 },
	]
	const [selectedBrand, setSelectedBrand] = useState('')
	const [selectedYear, setSelectedYear] = useState('')

	// Щоб у селекті не повторювались бренди та роки
	const uniqueBrands = [...new Set(cars.map(car => car.brand))]
	const uniqueYears = [...new Set(cars.map(car => car.year))]

	const filteredList = cars.filter(car => car.brand === selectedBrand && car.year === selectedYear)

	return (
		<>
			<div className="task-cnt">
				<p>Дано список автомобілів (марка, рік випуску, ціна). Сформувати елементи для фільтрування з використанням випадаючого списку (контент цих випадаючих списків сформувати у залежності від переданого списку).</p>
			</div>
			<div className="main-cnt">
				<div className="filters-cnt">
					<div className="input-cnt">
						<label htmlFor="brand">Марка</label>
						<select name="brand" id="brand" onChange={(e) => setSelectedBrand(e.target.value)}>
							{uniqueBrands.map(brand => (
								<option key={brand} value={brand}>{brand}</option>
							))}
						</select>
					</div>
					<div className="input-cnt">
						<label htmlFor="year">Рік випуску</label>
						<select name="year" id="year" onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
							{uniqueYears.map(year => (
								<option key={year} value={year}>{year}</option>
							))}
						</select>
					</div>
				</div>
				<div className="car-result">
					<ul>
						{filteredList.map(car => (
							<li key={car.id}>{car.brand} - {car.year} - {car.price}€</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default HW06