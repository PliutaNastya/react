import { useGetDoctorsQuery } from "@/api"
import Spinner from "@/components/Spinner"
import DoctorsItem from "./DoctorsItem"
import { useEffect, useMemo, useState } from "react"
import PaginationBlock from "@/components/PaginationBlock"

function DoctorsList() {
	const [currentPage, setCurrentPage] = useState(1)
	const limit = 5

	const { data, isLoading, isError, error } = useGetDoctorsQuery({ page: currentPage, limit })

	const doctorsList = useMemo(() => {
		return data?.ids.map(id => data.entities[id]) || []
	}, [data])

	const totalPages = data?.meta?.totalPages || 1

	useEffect(() => {
		if (!isLoading && doctorsList.length === 0 && currentPage > 1) {
			setCurrentPage(prev => prev - 1)
		}
	}, [doctorsList, isLoading, currentPage])

	if (isLoading) return <Spinner />
	if (isError) return <p>Error: {error.message}</p>
	if (!isLoading && !doctorsList.length) return <p>Лікарів поки немає</p>

	return (
		<>
			<ul className="people-list">
				{doctorsList?.map(item => (
					<DoctorsItem key={item.id} item={item} />
				))}
			</ul>
			<PaginationBlock currentPageNumber={currentPage} totalPagesAmount={totalPages} onPageChange={setCurrentPage} />
		</>

	)
}

export default DoctorsList