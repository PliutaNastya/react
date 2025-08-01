const frontRoutes = {
	pages: {
		home: '/',
		patients: {
			base: 'patients',
			edit: 'edit/:id?',
			details: 'details/:id'
		},
		doctors: {
			base: 'doctors',
			edit: 'edit/:id?',
			details: 'details/:id'
		},
		appointments: {
			base: 'appointments',
			edit: 'edit/:id?',
			details: 'details/:id'
		},
	},

	navigate: {
		home: '/',
		patients: {
			main: '/patients',
			edit: (id) => `edit/${id}`,
			createAbs: '/patients/edit',
			create: 'edit',
			details: (id) => `details/${id}`,
			detailsAbs: (id) => `/patients/details/${id}`
		},
		doctors: {
			main: '/doctors',
			edit: (id) => `edit/${id}`,
			create: 'edit',
			createAbs: '/doctors/edit',
			details: (id) => `details/${id}`,
			detailsAbs: (id) => `/doctors/details/${id}`
		},
		appointments: {
			main: '/appointments',
			edit: (id) => `edit/${id}`,
			create: 'edit',
			createAbs: '/appointments/edit',
			details: (id) => `details/${id}`,
			detailsAbs: (id) => `/appointments/details/${id}`
		}
	},
}

export default frontRoutes
