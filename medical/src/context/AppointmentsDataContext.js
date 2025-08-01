import { createContext, useContext } from "react"

export const AppointmentsDataContext = createContext()

export const useAppointmentsDataContext = () => {
	const context = useContext(AppointmentsDataContext)
	if (!context) {
		throw new Error("useAppointmentsDataContext must be used within AppointmentsDataProvider")
	}
	return context
}