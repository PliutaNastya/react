import frontRoutes from '../routes/frontRoutes'

export const menuList = [
	{
		id: 1,
		to: frontRoutes.pages.home,
		title: 'Home'
	},
	{
		id: 2,
		to: frontRoutes.pages.shop.index,
		title: 'Shop'
	},
	{
		id: 3,
		to: frontRoutes.pages.contacts,
		title: 'Contacts'
	},
	{
		id: 4,
		to: frontRoutes.pages.delivery,
		title: 'Delivery'
	}
]