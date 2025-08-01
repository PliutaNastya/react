export const patientInputFields = [
	{
		name: 'fullName',
		type: 'text',
		placeholder: 'Повне імʼя пацієнта',
		required: true,
		title: 'ПІБ*',
	},
	{
		name: 'birthDate',
		type: 'date',
		placeholder: 'Дата народження пацієнта',
		required: true,
		title: 'Дата Народження*',
	},
	{
		name: 'phone',
		type: 'tel',
		placeholder: '+380501234567',
		required: true,
		title: 'Номер телефону*',
		inputMode: 'tel',
		pattern: '^\\+?380\\d{9}$',
	},

	{
		name: 'email',
		type: 'email',
		placeholder: 'ivan@example.com',
		required: true,
		title: 'Електронна пошта*',
		autoComplete: 'email',
	},

	{
		name: 'address',
		type: 'text',
		title: 'Адреса',
		placeholder: 'м. Київ, вул. Шевченка, 12',
		required: false,
	},

	{
		name: 'notes',
		type: 'text',
		title: "Проблеми зі здоров'ям",
		placeholder: 'Алергія на пеніцилін',
		required: false,
	},
]

export const emptyData =  {
	fullName: '',
	birthDate: '',
	phone: '',
	email: '',
	address: '',
	notes: ''
}