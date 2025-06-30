import heroImage from "../../assets/img/home/hero.webp"
import aboutImage from "../../assets/img/home/about.webp"
import servicesImage from "../../assets/img/home/services.webp"
import Hero from "../../components/Hero"

function Home() {
	return (
		<div className="home">
			< Hero title='Welcome to Luméa Beauty' text='Where elegance meets everyday.' image={heroImage} alt='A bottle of hair care product alongside a pair of scissors on a neutral background.' />
			<section className="about">
				<div className="about__container reverse-block">
					<div className="reverse-block__image">
						<img src={aboutImage} alt="A set of makeup brushes and loose powder arranged on a sleek black background." />
					</div>
					<div className="reverse-block__content">
						<h2 className="title">About Us</h2>
						<div className="text">
							<p>At Luméa, we believe that beauty starts with feeling good in your own skin. Our carefully curated collection of skincare, makeup, and fragrance products is designed to bring confidence, comfort, and joy to your daily routine. Whether you're embracing your natural glow or creating a bold new look, we're here to celebrate your unique style.</p>
						</div>
					</div>
				</div>
			</section>
			<section className="services">
				<div className="services__container reverse-block">
					<div className="reverse-block__image">
						<img src={servicesImage} alt="Two makeup brushes are tossed into the air, scattering powder in a dynamic, colorful display." />
					</div>
					<div className="reverse-block__content content-services">
						<h2 className="title">Services</h2>
						<ul className="content-services__list">
							<li className="content-services__item">
								<h3>Worldwide Shipping</h3>
								<p>From Dublin to Dubai — beauty knows no borders.</p>
							</li>
							<li className="content-services__item">
								<h3>Clean Formulas</h3>
								<p>We prioritize products that are cruelty-free and skin-loving.</p>
							</li>
							<li className="content-services__item">
								<h3>Personalized Recommendations</h3>
								<p>Find your perfect match with our product guides.</p>
							</li>
							<li className="content-services__item">
								<h3>Secure Payments & Easy Returns</h3>
								<p>Stress-free checkout, happy returns guaranteed.</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home