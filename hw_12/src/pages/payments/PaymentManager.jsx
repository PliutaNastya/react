import PaymentsForm from "./components/PaymentsForm"
import { categoriesList } from "@/data/settings"
import PaymentsTable from "./components/PaymentsTable"

function PaymentManager() {
	
	return (
		<section className="payment">
			<div className="payment__container">
				<PaymentsForm categoriesList={categoriesList} />
				<div className="table-cnt">
					<PaymentsTable />
				</div>
			</div>
		</section>
	)
}

export default PaymentManager