import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiRoutes from './apiRoutes'
import { patientsAdapter } from '@/features/patients/patientsAdapter'
import { doctorsAdapter } from '@/features/doctors/doctorsAdapter'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://medical-backend-1-0h6m.onrender.com' }),
	tagTypes: ['Patients', 'Doctors', 'Appointments'],
	endpoints: (builder) => ({
		// Пацієнти
		// Отримання пацієнтів
		getPatients: builder.query({
			query: ({ page = 1, limit = 5 } = {}) => apiRoutes.patients.getPaginated(page, limit),
			// перетворює масив на нормалізований state
			transformResponse: (response) => ({
				...patientsAdapter.setAll(patientsAdapter.getInitialState(), response.data),
				meta: {
					totalPages: response.totalPages,
					page: response.page,
					limit: response.limit,
				},
			}),
			providesTags: ['Patients']
		}),
		// Отримання пацієнта по id
		getPatientById: builder.query({
			query: (id) => apiRoutes.patients.getById(id),
			providesTags: (result, error, id) => [{ type: 'Patients', id }]
		}),
		// Отримання відфільтрованих по імені пацієнтів
		getFilteredByPatientName: builder.query({
			query: (name) => apiRoutes.patients.filterByName(name),
			providesTags: ['Patients']
		}),
		// Оновлення пацієнта після редагування
		updatePatient: builder.mutation({
			query: ({ id, ...data }) => ({
				url: apiRoutes.patients.update(id),
				method: 'PUT',
				body: data
			}),
			invalidatesTags: (result, error, id) => ['Patients', { type: 'Patients', id }]
		}),
		// Додавання нового пацієнта
		addNewPatient: builder.mutation({
			query: (data) => ({
				url: apiRoutes.patients.create,
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['Patients']
		}),
		// Видалення пацієнта по id
		deletePatients: builder.mutation({
			query: (id) => ({
				url: apiRoutes.patients.delete(id),
				method: 'DELETE'
			}),
			invalidatesTags: (result, error, id) => ['Patients', { type: 'Patients', id }]
		}),
		// Лікарі
		// Отримання лікарів
		getDoctors: builder.query({
			query: ({ page = 1, limit = 5 } = {}) => apiRoutes.doctors.getPaginated(page, limit),
			transformResponse: (response) => ({
				...doctorsAdapter.setAll(doctorsAdapter.getInitialState(), response.data),
				meta: {
					totalPages: response.totalPages,
					page: response.page,
					limit: response.limit,
				},
			}),
			providesTags: ['Doctors']
		}),
		// Видалення лікарів
		deleteDoctors: builder.mutation({
			query: (id) => ({
				url: apiRoutes.doctors.delete(id),
				method: 'DELETE'
			}),
			invalidatesTags: (result, error, id) => ['Doctors', { type: 'Doctors', id }]
		}),
		// Отримання лікаря по id
		getDoctorById: builder.query({
			query: (id) => apiRoutes.doctors.getById(id),
			providesTags: (result, error, id) => [{ type: 'Doctors', id }]
		}),
		// Оновлення лікаря після редагування
		updateDoctor: builder.mutation({
			query: ({ id, ...data }) => ({
				url: apiRoutes.doctors.update(id),
				method: 'PUT',
				body: data
			}),
			invalidatesTags: (result, error, id) => ['Doctors', { type: 'Doctors', id }]
		}),
		// Додавання нового лікаря
		addNewDoctor: builder.mutation({
			query: (data) => ({
				url: apiRoutes.doctors.create,
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['Doctors']
		}),
		// Записи
		// Отримання записів
		getAllAppointments: builder.query({
			query: ({ page = 1, limit = 5 } = {}) =>
				apiRoutes.appointments.getPaginated(page, limit),
			transformResponse: (response) => ({
				items: response.data,
				meta: {
					total: response.total,
					page: response.page,
					limit: response.limit,
					totalPages: response.totalPages
				}
			}),
			providesTags: ['Appointments']
		}),
		// Фільтрування записів по імені пацієнта
		getFilteredAppointmentsByPatientName: builder.query({
			query: (name) => apiRoutes.appointments.filterByPatientName(name),
			providesTags: ['Appointments']
		}),
		// Фільтрування записів по даті
		getFilteredAppointmentsByDate: builder.query({
			query: (date) => apiRoutes.appointments.filterByDate(date),
			providesTags: ['Appointments']
		}),
		// Видалення запису по id
		deleteAppointment: builder.mutation({
			query: (id) => ({
				url: apiRoutes.appointments.delete(id),
				method: 'DELETE'
			}),
			invalidatesTags: (result, error, id) => ['Appointments', { type: 'Appointments', id }]
		}),
		// Отримання запису по id
		getAppointmentById: builder.query({
			query: (id) => apiRoutes.appointments.getById(id),
			providesTags: (result, error, id) => [{ type: 'Appointments', id }]
		}),
		// Оновлення запису після редагування
		updateAppointment: builder.mutation({
			query: ({ id, ...data }) => ({
				url: apiRoutes.appointments.update(id),
				method: 'PUT',
				body: data
			}),
			invalidatesTags: (result, error, id) => ['Appointments', { type: 'Appointments', id }]
		}),
		// Додавання нового пацієнту
		addNewAppointment: builder.mutation({
			query: (data) => ({
				url: apiRoutes.appointments.create,
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['Appointments']
		}),
	}),
})

export const {
	// Пацієнти
	useGetPatientsQuery,
	useGetFilteredByPatientNameQuery,
	useDeletePatientsMutation,
	useGetPatientByIdQuery,
	useUpdatePatientMutation,
	useAddNewPatientMutation,
	// Лікарі
	useGetDoctorsQuery,
	useDeleteDoctorsMutation,
	useGetDoctorByIdQuery,
	useAddNewDoctorMutation,
	useUpdateDoctorMutation,
	// Прийоми
	useGetAllAppointmentsQuery,
	useAddNewAppointmentMutation,
	useDeleteAppointmentMutation,
	useGetAppointmentByIdQuery,
	useGetFilteredAppointmentsByDateQuery,
	useGetFilteredAppointmentsByPatientNameQuery,
	useUpdateAppointmentMutation
} = api