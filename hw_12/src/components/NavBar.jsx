import { NavLink } from "react-router"
import { routes } from "@/routes/routes"

function NavBar() {

	return (
		<nav className='menu'>
			<ul className="menu__list">
				{routes[0].children.map((item, i) => (
					<li key={i} className="menu__item">
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
