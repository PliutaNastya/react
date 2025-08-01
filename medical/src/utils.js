export const formatDate = (dateIso) => {
	const date = new Date(dateIso)
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')

	return {
		input: `${year}-${month}-${day}T${hours}:${minutes}`,
		details: `${year}-${month}-${day}; ${hours}:${minutes}`,
	}
}

export const statusLabels = {
	scheduled: 'Заплановано',
	active: 'Активний',
	completed: 'Завершено',
}