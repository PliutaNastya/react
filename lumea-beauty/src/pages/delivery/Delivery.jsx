import Hero from "../../components/Hero"
import deliveryImage from "../../assets/img/delivery/delivery_image.webp"

function Delivery() {
	return (
		<div className="delivery">
			< Hero title='Shipping & Delivery' text='We offer fast and reliable shipping across Ireland and the EU to bring your beauty essentials straight to your door.' image={deliveryImage} alt='A collection of labeled boxes with tags, organized for easy identification and sorting.' />
			<div className="delivery__info">
				<div className="delivery__container">
					<div className="delivery__block">
						<h3>Processing Time</h3>
						<p>Orders are processed within 1–2 business days.</p>
					</div>
					<div className="delivery__block">
						<h3>Delivery Options</h3>
						<ul>
							<li><strong>Standard (Ireland):</strong> 2–4 business days — €4.99</li>
							<li><strong>Express (Ireland):</strong> 1–2 business days — €9.99</li>
							<li><strong>EU Shipping:</strong> 4–7 business days — from €7.99</li>
						</ul>
					</div>
					<div className="delivery__block">
						<h3>Free Shipping</h3>
						<p>We offer free standard shipping for all orders over €50.</p>
					</div>
					<div className="delivery__block">
						<h3>Tracking</h3>
						<p>Once your order ships, you’ll receive an email with a tracking link to follow your delivery in real time.</p>
					</div>
					<div className="delivery__block">
						<h3>Returns & Exchanges</h3>
						<p>If something’s not quite right, you can return unused items within 14 days.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Delivery