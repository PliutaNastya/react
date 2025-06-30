import Navbar from "./NavBar"
import logo from "../assets/img/logo.svg";

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo">
					<img src={logo} alt="Logotype" />
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