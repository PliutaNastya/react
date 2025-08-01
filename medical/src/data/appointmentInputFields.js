export const getAppointmentFormFields = (doctorOptions=[], patientOptions = []) => [
	{
		name: 'patientId',
		type: 'select',
		fieldType: 'select',
		placeholder: "Оберіть пацієнта",
		required: true,
		title: 'Пацієнт',
		options: patientOptions,
	},
	{
		name: 'doctorId',
		type: 'select',
		fieldType: 'select',
		placeholder: 'Оберіть лікаря',
		required: true,
		title: 'Лікар',
		options: doctorOptions,
	},
	{
		name: 'date',
		type: 'datetime-local',
		fieldType: 'input',
		required: true,
		placeholder: 'Оберіть дату та час',
		title: 'Оберіть дату прийому',
	},
	{
		name: 'reason',
		type: 'textarea',
		fieldType: 'textarea',
		required: false,
		title: 'Вкажіть причину візиту',
		placeholder: 'Опишіть скарги або мету візиту',
	},
	{
		name: 'status',
		type: 'select',
		fieldType: 'select',
		placeholder: 'Оберіть статус',
		required: false,
		title: 'Статус',
		options: [
			{ id: 'scheduled', label: 'Заплановано' },
			{ id: 'active', label: 'Активний' },
			{ id: 'completed', label: 'Завершено' },
		],
	},
]

export const emptyAppointmentData = {
	patientId: '',
	doctorId: '',
	date: '',
	reason: '',
	status: 'scheduled',
}
