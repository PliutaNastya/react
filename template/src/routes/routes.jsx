import { createBrowserRouter } from "react-router"
import frontRoutes from "@/routes/frontRoutes"
import MainLayout from "@/components/layout/MainLayout"
import Home from "@/pages/home/Home"
import ErrorPage from "@/pages/errors/ErrorPage"
import About from "@/pages/about/About"

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
				path: frontRoutes.pages.about,
				Component: About,
				handle: {
					title: 'About'
				}
			}
		],
	},
]

const router = createBrowserRouter(routes)

export default router