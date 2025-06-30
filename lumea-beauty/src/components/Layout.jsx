import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

function Layout() {
	return (
		<>
			< Header />
			<main className='page'>
				< Outlet />
			</main>
			< Footer />
		</>
	)
}

export default Layout