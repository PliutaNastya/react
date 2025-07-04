import Spinner from "@/components/Spinner"
import useTeachersApi from "@/hooks/useTeachersApi"
import frontRoutes from "@/routes/frontRoutes"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

function TeachersForm() {
	const [teacher, setTeacher] = useState({
		name: '',
		subject: '',
		photo: ''
	})
	const navigate = useNavigate()
	const { id } = useParams()
	const { loading, error, addTeacher, updateTeacher, getTeacherById } = useTeachersApi()
	const isEditing = !!id

	useEffect(() => {
		if (id) {

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
		}
	}, [id, getTeacherById])

	const handleChange = (e) => {
		const { name, value } = e.target
		setTeacher(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		let res

		if (id) {
			res = await updateTeacher(id, teacher)
		} else {
			res = await addTeacher(teacher)

			setTeacher({
				name: '',
				subject: '',
				photo: ''
			})
		}

		if (res) {
			navigate(frontRoutes.navigate.teachers.index)
		}
	}
	if (loading) return <Spinner />
	if (error) return <p>Error: { error }</p>
	return (
		<section className="teacher-form">
			<div className="teacher-form__container">
				<h1 className="title">Teacher</h1>
				<form onSubmit={handleSubmit} className="form">
					<h2 className="subtitle">{isEditing ? 'Update teacher' : 'Add New Teacher'}</h2>
					<label>
						<span>Name</span>
						<input type="text" name="name" value={teacher.name} placeholder="Type teacher's name" onChange={handleChange} />
					</label>
					<label>
						<span>Subject</span>
						<input type="text" name="subject" value={teacher.subject} placeholder="Type teacher's subject" onChange={handleChange} />
					</label>
					<label>
						<span>Photo url</span>
						<input type="url" name="photo" value={teacher.photo} placeholder="Type teacher's photo url" onChange={handleChange} />
					</label>
					<div className="form__actions">
						<button className="button" type="submit" disabled={loading}>{isEditing ? 'Update Teacher' : 'Add teacher'}</button>
						<button className="button" type="button" disabled={loading} onClick={() => navigate(frontRoutes.navigate.teachers.index)}>Cancel</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default TeachersForm