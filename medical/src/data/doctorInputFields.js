export const doctorInputFields = [
	{
		name: 'fullName',
		type: 'text',
		placeholder: 'Повне імʼя лікаря',
		required: true,
		title: 'ПІБ*',
		autoComplete: 'name',
	},

	{
		name: 'specialty',
		type: 'select',
		title: 'Спеціальність',
		placeholder: 'Вкажіть спеціальність',
		required: false,
	},

	{
		name: 'email',
		type: 'email',
		placeholder: 'olena.kov@example.com',
		title: 'Електронна пошта*',
		required: true,
		autoComplete: 'email',
	},

	{
		name: 'phone',
		type: 'tel',
		placeholder: '+380501234567',
		required: true,
		title: 'Номер телефону*',
		pattern: '^\\+?380\\d{9}$',
	},

	{
		name: 'room',
		type: 'text',
		placeholder: '101',
		required: false,
		title: 'Номер кімнати',
		pattern: '^\\d{1,4}$',
	},

	{
		name: 'notes',
		type: 'text',
		placeholder: 'Напр.: Прийом з 09:00 до 15:00',
		required: false,
		title: 'Нотатки',
	},
]

export const emptyDoctorData = {
	fullName: '',
	specialty: '',
	email: '',
	phone: '',
	room: '',
	notes: '',
}