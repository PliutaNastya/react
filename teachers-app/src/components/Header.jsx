import Logo from "./Logo"
import NavBar from "./NavBar"
import { useState } from "react"

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
				< NavBar isOpen={isMenuOpen} onCloseMenu={closeMenu} />
				<button type="button" className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={openMenu}><span></span></button>
			</div>
		</header>
	)
}

export default Header