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
		getPatientById: builder.query({
			query: (id) => apiRoutes.patients.getById(id),
			providesTags: (result, error, id) => [{ type: 'Patients', id }]
		}),
		getFilteredByPatientName: builder.query({
			query: (name) => apiRoutes.patients.filterByName(name),
			providesTags: ['Patients']
		}),
		updatePatient: builder.mutation({
			query: ({ id, ...data }) => ({
				url: apiRoutes.patients.update(id),
				method: 'PUT',
				body: data
			}),
			invalidatesTags: (result, error, id) => ['Patients', { type: 'Patients', id }]
		}),
		addNewPatient: builder.mutation({
			query: (data) => ({
				url: apiRoutes.patients.create,
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['Patients']
		}),
		deletePatients: builder.mutation({
			query: (id) => ({
				url: apiRoutes.patients.delete(id),
				method: 'DELETE'
			}),
			invalidatesTags: (result, error, id) => ['Patients', { type: 'Patients', id }]
		}),
		// Лікарі
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
		deleteDoctors: builder.mutation({
			query: (id) => ({
				url: apiRoutes.doctors.delete(id),
				method: 'DELETE'
			}),
			invalidatesTags: (result, error, id) => ['Doctors', { type: 'Doctors', id }]
		}),
		getDoctorById: builder.query({
			query: (id) => apiRoutes.doctors.getById(id),
			providesTags: (result, error, id) => [{ type: 'Doctors', id }]
		}),
		updateDoctor: builder.mutation({
			query: ({ id, ...data }) => ({
				url: apiRoutes.doctors.update(id),
				method: 'PUT',
				body: data
			}),
			invalidatesTags: (result, error, id) => ['Doctors', { type: 'Doctors', id }]
		}),
		addNewDoctor: builder.mutation({
			query: (data) => ({
				url: apiRoutes.doctors.create,
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['Doctors']
		}),
		// Записи
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
		getFilteredAppointmentsByPatientName: builder.query({
			query: (name) => apiRoutes.appointments.filterByPatientName(name),
			providesTags: ['Appointments']
		}),
		getFilteredAppointmentsByDate: builder.query({
			query: (date) => apiRoutes.appointments.filterByDate(date),
			providesTags: ['Appointments']
		}),
		deleteAppointment: builder.mutation({
			query: (id) => ({
				url: apiRoutes.appointments.delete(id),
				method: 'DELETE'
			}),
			invalidatesTags: (result, error, id) => ['Appointments', { type: 'Appointments', id }]
		}),
		getAppointmentById: builder.query({
			query: (id) => apiRoutes.appointments.getById(id),
			providesTags: (result, error, id) => [{ type: 'Appointments', id }]
		}),
		updateAppointment: builder.mutation({
			query: ({ id, ...data }) => ({
				url: apiRoutes.appointments.update(id),
				method: 'PUT',
				body: data
			}),
			invalidatesTags: (result, error, id) => ['Appointments', { type: 'Appointments', id }]
		}),
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

export const { useGetPatientsQuery, useGetFilteredByPatientNameQuery, useDeletePatientsMutation, useGetPatientByIdQuery, useUpdatePatientMutation, useAddNewPatientMutation, useGetDoctorsQuery, useGetAllAppointmentsQuery, useDeleteDoctorsMutation, useGetDoctorByIdQuery, useAddNewDoctorMutation, useUpdateDoctorMutation, useAddNewAppointmentMutation, useDeleteAppointmentMutation, useGetAppointmentByIdQuery, useGetFilteredAppointmentsByDateQuery, useGetFilteredAppointmentsByPatientNameQuery, useUpdateAppointmentMutation } = api