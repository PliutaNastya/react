import { useState } from "react"
import NavBar from "../NavBar"
import Logo from "../Logo"
import Icon from "../Icon"
import ThemeToggle from "../ThemeToggle"

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const openMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}
	return (
		<header className="header">
			<div className="header__container">
				<Logo />
				<NavBar isOpen={isMenuOpen} onCloseMenu={closeMenu} />
				<div className="header__actions">
					<ThemeToggle/>
					<button type="button" className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={openMenu}><span></span></button>
				</div>
			</div>
		</header>
	)
}

export default Header