import Spinner from "@/components/Spinner"
import useTeachersApi from "@/hooks/useTeachersApi"
import frontRoutes from "@/routes/frontRoutes"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"

function TeachersDetail() {
	const [teacher, setTeacher] = useState({
			name: '',
			subject: '',
			photo: ''
		})
	const { id } = useParams()
	const { loading, error, getTeacherById } = useTeachersApi()

	useEffect(() => {
		const fetchTeacher = async () => {
			const teacherData = await getTeacherById(id)
			if (teacherData) {
				setTeacher({
					name: teacherData.name,
					subject: teacherData.subject,
					photo: teacherData.photo
				})
			}
		}
		fetchTeacher()
	}, [id, getTeacherById])

	if (loading) return <Spinner />
	if (error) return <p>Error: {error}</p>
	return (
		<section className="teacher">
			<div className="teacher__container">
				<h1 className="title">Teacher's detail</h1>
				<div className="teacher__info">
					<img src={teacher.photo || "https://cdn-icons-png.flaticon.com/512/168/168726.png"} alt={teacher.name} className="teacher__photo" />
					<h2 className="subtitle">{teacher.name}</h2>
					<p className="text">
						Subject: <span>{teacher.subject}</span>
					</p>
				</div>
				<Link to={frontRoutes.navigate.teachers.index} className="button"> Back to Teachers</Link>
			</div>
		</section>
	)
}

export default TeachersDetail