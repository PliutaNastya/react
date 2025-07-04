import apiRoutes from "@/api/apiRoutes"
import axios from "axios"
import { useCallback, useState } from "react"

const useTeachersApi = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchTeachers = useCallback(async () => {
		setLoading(true)
		setError(null)

		try {
			const res = await axios.get(apiRoutes.getAllTeachers)
			setData(res.data)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}, [])

	const addTeacher = useCallback(async (teacherData) => {
		// Вмикаю лоадінг
		setLoading(true)
		// Очищаю попередню помилку
		setError(null)

		try {
			// POST-запит повинен мати другий параметр - обʼєкт із даними нового вчителя
			const res = await axios.post(apiRoutes.addTeacher, teacherData)
			setData(prev => [...prev, res.data])
			return res.data
		} catch (error) {
			// Оновлюю помилку
			setError(error.message)
		} finally {
			// Вимикаю лоадінг
			setLoading(false)
		}

	}, [])

	const updateTeacher = useCallback(async (id, { name, subject, photo }) => {
		setLoading(true)
		setError(null)

		try {
			const res = await axios.put(apiRoutes.updateTeacher(id), { name, subject, photo })
			setData(prev => prev.map(teacher => teacher.id === id ? res.data : teacher))
			return res.data
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}, [])

	const deleteTeacher = useCallback(async (id) => {
		setLoading(true)
		setError(null)

		try {
			await axios.delete(apiRoutes.deleteTeacher(id))
			setData(prev => prev.filter(teacher => teacher.id !== id))
			return true
		} catch (error) {
			setError(error.message)
			return false
		} finally {
			setLoading(false)
		}
	}, [])

	const getTeacherById = useCallback(async (id) => {
		setLoading(true)
		setError(null)

		try {
			const res = await axios.get(apiRoutes.getTeacherById(id))
			return res.data
		} catch (error) {
			setError(error.message)
			return null
		} finally {
			setLoading(false)
		}
	}, [])

	return {
		data,
		loading,
		error,
		fetchTeachers,
		addTeacher,
		updateTeacher,
		deleteTeacher,
		getTeacherById
	}
}

export default useTeachersApi