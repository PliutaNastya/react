import { NavLink } from 'react-router'
import { menuList } from "./utils"

function Navbar() {
	return (
		<nav>
			<ul className='menu__list'>
				{
					menuList.map(item => (
						<li key={item.id} className='menu__item'>
							<NavLink
								to={item.to}
								end={item.title === 'Home'}
								className={({ isActive }) => (isActive ? 'active menu__link' : 'menu__link')}
							>
								{item.title}
							</NavLink>
						</li>
					))
				}
			</ul>
		</nav>
	)
}

export default Navbar
