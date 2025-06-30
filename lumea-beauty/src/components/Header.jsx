import Navbar from "./NavBar"

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo">
					<img src="../../public/logo.svg" alt="Logotype" />
					<span>Luméa Beauty</span>
				</div>
				<div className="header__menu menu">
					< Navbar />
				</div>
			</div>
		</header>
	)
}

export default Header