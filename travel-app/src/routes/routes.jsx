import { createBrowserRouter } from "react-router"
import frontRoutes from "@/routes/frontRoutes"
import MainLayout from "@/components/layout/MainLayout"
import Home from "@/pages/home/Home"
import ErrorPage from "@/pages/errors/ErrorPage"
import BusChoice from "@/pages/bus-choice/BusChoice"
import HotelsChoice from "@/pages/hotels-choice/HotelsChoice"
import Order from "@/pages/order/Order"

export const routes = [
	{
		path: frontRoutes.pages.home,
		Component: MainLayout,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				Component: Home,
				handle: {
					title: 'Home'
				}
			},
			{
				path: frontRoutes.pages.busChoice,
				Component: BusChoice,
				handle: {
					title: 'Bus Choice'
				}
			},
			{
				path: frontRoutes.pages.hotelsChoice,
				Component: HotelsChoice,
				handle: {
					title: 'Hotels Choice'
				}
			},
			{
				path: frontRoutes.pages.order,
				Component: Order,
				handle: {
					title: 'Order'
				}
			},
		],
	},
]

const router = createBrowserRouter(routes)

export default router