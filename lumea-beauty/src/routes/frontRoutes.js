export default {
	pages: {
		home: '/',
		shop: {
			index: '/shop',
			detail: ':id',
		},
		contacts: '/contacts',
		delivery: '/delivery',
		page404: '*'
	},
	navigate: {
		shop: {
			getDetailLink: (id) => `/shop/${id}`,
			returnBackToProducts: () => `/shop`
		},
		returnBackToHome: () => `/`
	},
}
