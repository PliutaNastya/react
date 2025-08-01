import Spinner from "@/components/Spinner"
import PatientsItem from "./PatientsItem"
import { useGetFilteredByPatientNameQuery, useGetPatientsQuery } from "@/api"
import { useEffect, useMemo, useState } from "react"
import useDebounce from "@/hooks/useDebounce"
import PaginationBlock from "@/components/PaginationBlock"

function PatientsList() {
	const [currentPage, setCurrentPage] = useState(1)
	const limit = 5


	const { data, isLoading: isAllLoading, isError: isAllError, error: allError } =
		useGetPatientsQuery({ page: currentPage, limit })

	const totalPages = data?.meta?.totalPages || 1

	const allPatientsList = useMemo(() => {
		return data?.ids.map(id => data.entities[id]) || []
	}, [data])

	const [searchValue, setSearchValue] = useState('')
	const debouncedSearchValue = useDebounce(searchValue, 300)
	const trimmedDebouncedSearchValue = debouncedSearchValue.trim()

	const {
		data: filteredPatientsList = [],
		isLoading: isFilteredLoading,
		isError: isFilteredError,
		error: filteredError
	} = useGetFilteredByPatientNameQuery(trimmedDebouncedSearchValue, {
		skip: trimmedDebouncedSearchValue.length === 0,
	})

	const patientsList = trimmedDebouncedSearchValue ? filteredPatientsList?.data || [] : allPatientsList
	const isLoading = trimmedDebouncedSearchValue ? isFilteredLoading : isAllLoading
	const isError = trimmedDebouncedSearchValue ? isFilteredError : isAllError
	const error = trimmedDebouncedSearchValue ? filteredError : allError

	useEffect(() => {
		if (!isLoading && !trimmedDebouncedSearchValue && allPatientsList.length === 0 && currentPage > 1) {
			setCurrentPage(prev => prev - 1)
		}
	}, [allPatientsList, isLoading, currentPage, trimmedDebouncedSearchValue])

	return (
		<>
			<label>
				<span>Пошук за іменем:</span>
				<input type="search" value={searchValue} placeholder="Почніть вводити ім'я..." name="searchPatient" onChange={(e) => setSearchValue(e.target.value)} />
			</label>
			{isLoading && <Spinner />}
			{isError && <p>Error: {error.message}</p>}
			{!isLoading && !patientsList.length && <p>Пацієнтів поки немає</p>}
			<ul className="people-list">
				{patientsList.map(item => (
					<PatientsItem key={item.id} item={item} />
				))}
			</ul>
			{!trimmedDebouncedSearchValue && (
				<PaginationBlock currentPageNumber={currentPage} totalPagesAmount={totalPages} onPageChange={setCurrentPage} />
			)}
		</>

	)
}

export default PatientsList