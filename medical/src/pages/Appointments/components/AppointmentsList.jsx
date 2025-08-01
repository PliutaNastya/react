import { useGetAllAppointmentsQuery, useGetFilteredAppointmentsByPatientNameQuery } from "@/api"
import Spinner from "@/components/Spinner"
import AppointmentsItem from "./AppointmentsItem"
import { useEffect, useMemo, useState } from "react"
import useDebounce from "@/hooks/useDebounce"
import PaginationBlock from "@/components/PaginationBlock"

function AppointmentsList() {
	const [currentPage, setCurrentPage] = useState(1)
	const limit = 5

	const [searchByPatientValue, setSearchByPatientValue] = useState('')
	const debouncedSearchByPatientValue = useDebounce(searchByPatientValue, 300)
	const trimDebouncedSearchByPatientValue = debouncedSearchByPatientValue.trim()

	const { data: allAppointmentsData, isLoading: isAllLoading, isError: isAllError, error: allError } = useGetAllAppointmentsQuery({ page: currentPage, limit })

	const { data: filteredAppointmentsData = [], isLoading: isFilteredLoading, isError: isFilteredError, error: filteredError } = useGetFilteredAppointmentsByPatientNameQuery(trimDebouncedSearchByPatientValue, {
		skip: trimDebouncedSearchByPatientValue.length === 0,
	})

	const appointmentsList = useMemo(() => {
		return trimDebouncedSearchByPatientValue
			? filteredAppointmentsData?.data
			: allAppointmentsData?.items || []
	}, [trimDebouncedSearchByPatientValue, filteredAppointmentsData, allAppointmentsData])

	const totalPages = allAppointmentsData?.meta?.totalPages || 1
	const isLoading = trimDebouncedSearchByPatientValue ? isFilteredLoading : isAllLoading
	const isError = trimDebouncedSearchByPatientValue ? isFilteredError : isAllError
	const error = trimDebouncedSearchByPatientValue ? filteredError : allError

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