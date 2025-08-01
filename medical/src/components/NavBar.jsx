import { NavLink } from "react-router"
import { routes } from "@/routes/routes"
import Icon from "./Icon"

const getItemsForMainMenu = (routesList, basePath) => {
	const res = []
	routesList.forEach(route => {
		if (route?.meta?.labelForMainMenu) {
			res.push({
				path: route.index ? basePath : basePath + route.path,
				label: route.meta.labelForMainMenu,
				icon: route.meta.icon
			})
		}
		if (route.children) res.push(...getItemsForMainMenu(route.children, basePath ? basePath + route.path + '/' : basePath + route.path))
	})
	
	return res
}


function NavBar() {
	
	const itemsForMainMenu = getItemsForMainMenu(routes, '')
	
	return (
		<nav className='menu'>
			<ul className="menu-list">
				{itemsForMainMenu.map((item, i) => (
					<li key={i} className="menu-item">
						<NavLink to={item.path} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} end>
							<Icon name={item.icon} color="currentColor" />
							<span>{item.label}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavBar
