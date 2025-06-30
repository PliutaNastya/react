function Hero({ title, text, image, alt }) {
	return (
		<section className="hero">
			<div className="hero__container">
				<div className="hero__bg">
					<img src={image} alt={alt} />
				</div>
				<div className="hero__content">
					<h1 className="hero__title">{title}</h1>
					<p className="hero__label">{text}</p>
				</div>
			</div>
		</section>
	)
}

export default Hero