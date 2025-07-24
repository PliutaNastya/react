import { addPayment } from "@/store/paymentsSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"

function PaymentsForm({ categoriesList }) {
	const [money, setMoney] = useState(0)
	const [category, setCategory] = useState('')

	const dispatch = useDispatch()
	const onPaymentAdd = () => {
		const newPayment = {
			money,
			category
		}
		dispatch(addPayment(newPayment))

		setMoney(0)
		setCategory('')
	}

	return (
		<form onSubmit={e => e.preventDefault()}>
			<label>
				<span>Money</span>
				<input type="number" value={money} onChange={(e) => setMoney(Number(e.target.value))} />
			</label>
			<label>
				<span>Category</span>
				<select value={category} onChange={(e) => setCategory(e.target.value)}>
					<option value="">Select Category...</option>
					{
						categoriesList.map((category, index) => (
							<option key={index} value={category}>{category}</option>
						))
					}
				</select>
			</label>
			<button type="submit" onClick={onPaymentAdd}>Submit</button>
		</form>
	)
}

export default PaymentsForm