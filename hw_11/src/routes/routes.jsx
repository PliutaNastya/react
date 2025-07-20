import { createBrowserRouter } from "react-router"
import frontRoutes from "@/routes/frontRoutes"
import MainLayout from "@/components/layout/MainLayout"
import Home from "@/pages/home/Home"
import ErrorPage from "@/pages/errors/ErrorPage"
import ProductsList from "@/pages/products/ProductsList"
import PostsList from "@/pages/posts/PostsList"

export const routes = [
	{
		path: frontRoutes.pages.home,
		Component: MainLayout,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				Component: Home,
				handle: {
					title: 'Home'
				}
			},
			{
				path: frontRoutes.pages.prodList,
				Component: ProductsList,
				handle: {
					title: 'Products List'
				}
			},
			{
				path: frontRoutes.pages.postList,
				Component: PostsList,
				handle: {
					title: 'Posts List'
				}
			}
		],
	},
]

const router = createBrowserRouter(routes)

export default router