import { menuList } from "@/components/utils.js";
import { NavLink } from "react-router";

function NavBar({ isOpen, onCloseMenu }) {
	return (
		<nav className={`nav ${isOpen ? 'nav--open' : ''}`}>
			<ul className="menu">
				{
					menuList.map(item => (
						<li key={item.id} className="menu__item" onClick={onCloseMenu}>
							<NavLink to={item.to} className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}>{item.title}</NavLink>
						</li>
					))
				}
			</ul>
		</nav>
	)
}

export default NavBar