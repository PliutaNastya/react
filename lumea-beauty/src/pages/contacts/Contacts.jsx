import Hero from "../../components/Hero"
import contactsImage from "../../assets/img/contacts/contacts_image.webp"

function Contacts() {
	return (
		<div className="contacts">
			< Hero title='Contact Us' text='If you have questions about our products, your order, or anything else — we’re happy to help!' image={contactsImage} alt='A person holding a coffee cup in one hand and a cell phone in the other, standing in a casual setting.' />
			<div className="contacts__info">
				<div className="contacts__container">
					<address>
						<ul className="contacts__list">
							<li className="contacts__item">
								<h3>Email</h3>
								<a href="mailto:hello@beautify.store">hello@beautify.store</a>
							</li>
							<li className="contacts__item">
								<h3>Phone</h3>
								<a href="tel:+1234567890">+1 (234) 567‑890</a>
							</li>
							<li className="contacts__item">
								<h3>Address</h3>
								<p>23 Blossom Street, Dublin, Ireland</p>
							</li>
							<li className="contacts__item">
								<h3>Working Hours</h3>
								<p className="contacts__time">
									<span>Mon–Fri: </span>
									<span><time dateTime="09:00">09:00</time> – <time dateTime="18:00">18:00</time></span>
									<span>Sat–Sun: Closed</span>
								</p>
							</li>
						</ul>
					</address>
				</div>
			</div>
		</div>
	)
}

export default Contacts