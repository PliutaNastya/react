import { selectFilteredProducts } from "@/redux/slices/products/productsSelectors"
import { addProduct, setFilter } from "@/redux/slices/products/productsSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function ProductsList() {
	const [filterValue, setFilterValue] = useState('')
	const [addInputValue, setAddInputValue] = useState('')
	const filteredProducts = useSelector(selectFilteredProducts)
	const dispatch = useDispatch()

	const handleChangeFilter = (e) => {
		const newValue = e.target.value
		const trimValue = newValue.trim()

		setFilterValue(newValue)
		dispatch(setFilter(trimValue))
	}

	const handleAddProduct = () => {
		const trimInputValue = addInputValue.trim()
		if(trimInputValue === '') return

		dispatch(addProduct({ name: trimInputValue }))
		setAddInputValue('')
	}

	return (
		<section className="products">
			<div className="products__container">
				<div className="products__body">
					<div className="prod-filter">
						<label htmlFor="filter">Filter</label>
						<input type="text" value={filterValue} id="filter" onChange={handleChangeFilter} />
					</div>
					<div className="prod-add">
						<input type="text" value={addInputValue} onChange={(e) => setAddInputValue(e.target.value)} />
						<button type="button" onClick={handleAddProduct}>Add</button>
					</div>
				</div>
				<h1>Products List</h1>
				<ul className="list">
					{
						filteredProducts.map(prod => (
							<li key={prod.id}>{prod.name}</li>
						))
					}
				</ul>
			</div>
		</section>
	)
}

export default ProductsList