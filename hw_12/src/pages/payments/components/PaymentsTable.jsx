import { useSelector } from "react-redux"
import PaymentsItem from "./PaymentsItem"

function PaymentsTable() {
	const paymentsList = useSelector(state => state.payments.paymentsList)

	return (
		<>
			{
				paymentsList.length ? <table>
					<thead>
						<tr>
							<th>Category</th>
							<th>Money</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							paymentsList.map(item => (
								<PaymentsItem key={item.id} paymentData={item} />
							))
						}
					</tbody>
				</table> : <p>List is empty</p>
			}
		</>

	)
}

export default PaymentsTable