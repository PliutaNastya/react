export default {
	pages: {
		home: '/',
		teachers: {
			index: '/teachers',
			add: 'new',
			edit: ':id/edit',
			detail: ':id'
		},
		meetings: '/meetings',
		aboutApp: '/about-app',
		aboutDev: '/about-dev'
	},
	navigate: {
		home: '/',
		teachers: {
			// Тут вже треба вказувати повні шляхи
			index: '/teachers',
			// як тут наприклад
			add: '/teachers/new',
			// Тут функції, бо в нас будуть різні id
			edit: (id) => `/teachers/${id}/edit`,
			detail: (id) => `/teachers/${id}`
		},
		meetings: '/meetings',
		aboutApp: '/about-app',
		aboutDev: '/about-dev'
	}
}