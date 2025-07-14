import { useState } from "react"
import NavBar from "../NavBar"

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
			<NavBar isOpen={isMenuOpen} onCloseMenu={closeMenu} />
			<button type="button" className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={openMenu}><span></span></button>
		</header>
	)
}

export default Header