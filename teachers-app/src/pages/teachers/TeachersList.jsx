import Spinner from "@/components/Spinner"
import useTeachersApi from "@/hooks/useTeachersApi"
import { useEffect, useState } from "react"
import TeachersCard from "./components/TeachersCard"
import { useNavigate } from "react-router"
import frontRoutes from "@/routes/frontRoutes"

function TeachersList() {
	const { data: teachersList, loading, error, fetchTeachers, deleteTeacher } = useTeachersApi()
	const [selectedTeachersId, setSelectedTeachersId] = useState([])
	const navigate = useNavigate()
	
	useEffect(() => {
		fetchTeachers()
	}, [fetchTeachers])

	const onSelect = (id) => {
		if (selectedTeachersId.includes(id)) {
			setSelectedTeachersId(prev => prev.filter(teacherId => teacherId !==id))
		} else setSelectedTeachersId(prev => [...prev, id])
		return
	}

	const goToMeeting = () => {
		navigate(frontRoutes.pages.meetings, {
			state: {
				teachers: teachersList.filter(teacher => selectedTeachersId.includes(teacher.id))
			}
		})
	}

	const handleDelete = async (id) => {
		const confirmDelete = window.confirm('Are you sure?')

		if (confirmDelete) {
			await deleteTeacher(id)
		}
	}

	let content
	if (loading) content = < Spinner />
	else if (error) content = <p>Error: {error}</p>
	else content = teachersList.map(teacher => <TeachersCard key={teacher.id} teacher={teacher} onSelect={onSelect} onDelete={handleDelete} isSelected={selectedTeachersId.includes(teacher.id)} />)

return (
	<section className="teachers">
		<div className="teachers__container">
			<h1 className="title">Teachers List</h1>
			<div className="teachers__actions">
				<button type="button" className="button" onClick={() => navigate(frontRoutes.navigate.teachers.add)}>Add New Teacher</button>
				<button type="button" className="button" disabled={selectedTeachersId.length === 0} onClick={goToMeeting}>Select {selectedTeachersId.length} Teachers for Meeting</button>
			</div>
			<ul>
				{content}
			</ul>
			<button type="button" className="button" onClick={goToMeeting}>Go to Meeting</button>
		</div>
	</section>
)
}

export default TeachersList