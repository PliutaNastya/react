import bannerImage from '@/assets/img/banner_image.svg'

function Header() {
	
	return (
		<header className="header">
			<div className="banner">
				<div className="banner-content">
					<h2>Вітаємо!</h2>
					<p>Гарного дня і не забувайте дбати про своє здоров’я! Пийте більше води, усміхайтесь частіше й знаходьте час на те, що робить вас щасливими.</p>
				</div>
				<div className="banner-image">
					<img src={bannerImage} alt="Image" />
				</div>
			</div>
		</header>
	)
}

export default Header