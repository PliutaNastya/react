import { deleteItem, repeatItem } from "@/store/paymentsSlice"
import { useDispatch } from "react-redux"

function PaymentsItem({ paymentData }) {
	const dispatch = useDispatch()

	const onDeleteItem = () => {
		dispatch(deleteItem(paymentData.id))
	}

	const onRepeatItem = () => {
		dispatch(repeatItem(paymentData.id))
	}

	return (
		<tr>
			<td>{paymentData.category}</td>
			<td>{paymentData.money}</td>
			<td>
				<button type="button" className="button" onClick={onDeleteItem}>Delete</button>
				<button type="button" className="button" onClick={onRepeatItem}>Repeat</button>
			</td>
		</tr>
	)
}

export default PaymentsItem