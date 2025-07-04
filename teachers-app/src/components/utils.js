import frontRoutes from "@/routes/frontRoutes";

export const menuList = [
	{
		id: 1,
		title: 'Home',
		to: frontRoutes.pages.home
	},
	{
		id: 2,
		title: 'Teachers',
		to: frontRoutes.pages.teachers.index
	},
	{
		id: 3,
		title: 'Meetings',
		to: frontRoutes.pages.meetings
	},
	{
		id: 4,
		title: 'About App',
		to: frontRoutes.pages.aboutApp
	},
	{
		id: 5,
		title: 'About Developers',
		to: frontRoutes.pages.aboutDev
	},
]