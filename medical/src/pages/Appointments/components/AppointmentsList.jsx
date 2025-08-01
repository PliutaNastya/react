import { useGetAllAppointmentsQuery, useGetFilteredAppointmentsByPatientNameQuery } from "@/api"
import Spinner from "@/components/Spinner"
import AppointmentsItem from "./AppointmentsItem"
import { useEffect, useMemo, useState } from "react"
import useDebounce from "@/hooks/useDebounce"
import PaginationBlock from "@/components/PaginationBlock"

function AppointmentsList() {
	// Стан для збереження поточної сторінки
	const [currentPage, setCurrentPage] = useState(1)
	const limit = 5

	// Стан для збереження значення в інпуті
	const [searchByPatientValue, setSearchByPatientValue] = useState('')
	// debounce для зменшення запитів
	const debouncedSearchByPatientValue = useDebounce(searchByPatientValue, 300)
	// Видаляю зайві пробіли
	const trimDebouncedSearchByPatientValue = debouncedSearchByPatientValue.trim()

	// Отримання даних про записи на сторінку
	const { data: allAppointmentsData, isLoading: isAllLoading, isError: isAllError, error: allError } = useGetAllAppointmentsQuery({ page: currentPage, limit })

	// Отримання відфільтрованих даних
	const { data: filteredAppointmentsData = [], isLoading: isFilteredLoading, isError: isFilteredError, error: filteredError } = useGetFilteredAppointmentsByPatientNameQuery(trimDebouncedSearchByPatientValue, {
		skip: trimDebouncedSearchByPatientValue.length === 0,
	})

	// Якщо в інпут ввели значення, тобто пошук активовано, то виводимо список відфільтрованих даних, а якщо ні, то звичайний список
	const appointmentsList = useMemo(() => {
		return trimDebouncedSearchByPatientValue
			? filteredAppointmentsData?.data
			: allAppointmentsData?.items || []
	}, [trimDebouncedSearchByPatientValue, filteredAppointmentsData, allAppointmentsData])

	// Визначаємо кількість сторінок
	const totalPages = allAppointmentsData?.meta?.totalPages || 1
	// Визначення актуального завантаження, наявність помилки та помилки
	const isLoading = trimDebouncedSearchByPatientValue ? isFilteredLoading : isAllLoading
	const isError = trimDebouncedSearchByPatientValue ? isFilteredError : isAllError
	const error = trimDebouncedSearchByPatientValue ? filteredError : allError

	// Якщо список записів порожній на цій сторінці - повертаємось на попередню
	useEffect(() => {
		if (
			!isLoading &&
			!trimDebouncedSearchByPatientValue &&
			appointmentsList.length === 0 &&
			currentPage > 1
		) {
			setCurrentPage(prev => prev - 1)
		}
	}, [appointmentsList, isLoading, currentPage, trimDebouncedSearchByPatientValue])

	return (
		<>
			<label>
				<span>Пошук за іменем пацієнта:</span>
				<input type="search" value={searchByPatientValue} placeholder="Почніть вводти ім'я пацієнта..." name="searchByPatientName" onChange={(e) => setSearchByPatientValue(e.target.value)} />
			</label>

			{isLoading && <Spinner />}
			{isError && <p>Error: {error.message}</p>}
			{!isLoading && appointmentsList.length === 0 && <p>Записів не знайдено</p>}
			
			<ul className="people-list">
				{appointmentsList?.map(item => (
					<AppointmentsItem key={item.id} item={item} />
				))}
			</ul>
			{!trimDebouncedSearchByPatientValue && (
				<PaginationBlock currentPageNumber={currentPage} totalPagesAmount={totalPages} onPageChange={setCurrentPage} />
			)}
		</>

	)
}

export default AppointmentsList