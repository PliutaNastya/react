import { createBrowserRouter } from "react-router"
import frontRoutes from "@/routes/frontRoutes"
import MainLayout from "@/components/layout/MainLayout"
import Home from "@/pages/home/Home"
import ErrorPage from "@/pages/errors/ErrorPage"
import PaymentManager from "@/pages/payments/PaymentManager"
import Posts from "@/pages/posts/Posts"
import PostsInfiniteScroll from "@/pages/posts/PostsInfiniteScroll"
import PostsShowMore from "@/pages/posts/PostsShowMore"

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
				path: frontRoutes.pages.payments,
				Component: PaymentManager,
				handle: {
					title: 'Payment Manager'
				}
			},
			{
				path: frontRoutes.pages.posts,
				Component: Posts,
				handle: {
					title: 'Posts'
				}
			},
			{
				path: frontRoutes.pages.postsInfiniteScroll,
				Component: PostsInfiniteScroll,
				handle: {
					title: 'Posts Infinite Scroll'
				}
			},
			{
				path: frontRoutes.pages.postsShowMore,
				Component: PostsShowMore,
				handle: {
					title: 'Posts Show More'
				}
			},
		],
	},
]

const router = createBrowserRouter(routes)

export default router