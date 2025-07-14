import { useEffect } from "react"
import { NavLink } from "react-router"
import { routes } from "@/routes/routes"

function NavBar({ isOpen, onCloseMenu }) {
	// useEffect для додавання класу для боді, коли бургер меню відкрите
	useEffect(() => {
		isOpen ? document.body.classList.add('body--no-scroll') : document.body.classList.remove('body--no-scroll')
	}, [isOpen])

	return (
		<nav className={`menu ${isOpen ? 'menu--open' : ''}`}>
			<ul className="menu__list">
				{routes[0].children.map((item, i) => (
					<li key={i} className="menu__item" onClick={onCloseMenu}>
						<NavLink to={item.path} className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"} end>
							{item.handle?.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavBar
