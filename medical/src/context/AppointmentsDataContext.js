import { createContext, useContext } from "react"

// Створення контексту
export const AppointmentsDataContext = createContext()

// Кастомний хук для зручного доступу до даних з контексту і перевірка на неправильне використання контексту поза межами провайдера
export const useAppointmentsDataContext = () => {
	const context = useContext(AppointmentsDataContext)
	if (!context) {
		throw new Error("useAppointmentsDataContext must be used within AppointmentsDataProvider")
	}
	return context
}