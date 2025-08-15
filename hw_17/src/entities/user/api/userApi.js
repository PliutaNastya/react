import { baseApi } from '@/shared/api/baseApi'
import { apiRoutes } from '@/shared/config/routes/apiRoutes'

export const userApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getUsers: build.query({
			//   query: ({ page, limit }) => ({
			//     url: apiRoutes.users,
			//     params: { page, limit },
			//   }),
			query: () => ({
				url: apiRoutes.users,
			}),
			providesTags: ['User'],
		}),
		getUserById: build.query({
			query: (id) => `${apiRoutes.users}/${id}`,
			providesTags: ['User'],
		}),
		getProfile: build.query({
			query: () => apiRoutes.profile,
			providesTags: ['User'],
		}),
		addUser: build.mutation({
			query: (data) => ({
				url: apiRoutes.users,
				method: 'Post',
				body: data,
			}),
			invalidatesTags: ['User']
		}),
		deleteUser: build.mutation({
			query: (id) => ({
				url: apiRoutes.deleteUser(id),
				method: 'DELETE',
			}),
			invalidatesTags:(result, error, id) => ['User', {type: 'User', id}]
		})
	}),
})

export const { useGetUsersQuery, useGetUserByIdQuery, useGetProfileQuery, useAddUserMutation, useDeleteUserMutation } =
	userApi
