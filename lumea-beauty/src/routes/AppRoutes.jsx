import { Routes, Route } from 'react-router'
import { lazy, Suspense } from 'react'
import frontRoutes from './frontRoutes'
import Layout from '../components/Layout'
import Home from '../pages/home/Home'
import Contacts from '../pages/contacts/Contacts'
import Delivery from "../pages/delivery/Delivery"
import Page404 from '../pages/page404/Page404'

const Shop = lazy(() => import('../pages/shop/Shop'))
const ProductDetails = lazy(() => import('../pages/shop/ProductDetails'))

function AppRoutes() {
	return (
		<Routes>
			<Route path={frontRoutes.pages.home} element={<Layout />}>
				<Route index element={< Home />} />
				<Route path={frontRoutes.pages.shop.index}>
					<Route index element={
						<Suspense fallback={<div>Loading...</div>}>
							< Shop />
						</Suspense>
					} />
					<Route
						path={frontRoutes.pages.shop.detail}
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<ProductDetails />
							</Suspense>
						}
					/>
				</Route>
				<Route
					path={frontRoutes.pages.contacts}
					element={< Contacts />}
				/>
				<Route
					path={frontRoutes.pages.delivery}
					element={< Delivery />}
				/>
			</Route>
			<Route
				path={frontRoutes.pages.page404}
				element={<Page404 />}
			/>
		</Routes>
	)
}

export default AppRoutes
