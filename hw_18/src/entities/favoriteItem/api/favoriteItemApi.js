import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from '../../../shared/api/DbOperations'

const db = new DbOperations('favorites')

export const favoriteItemApi = createApi({
	reducerPath: 'favoriteItemApi',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['FavoriteItem'],
	endpoints: (builder) => ({
		getUserFavorite: builder.query({
			async queryFn(userId) {
				try {
					const cart = await db.getFavoriteByUserId(userId)
					return { data: cart }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			providesTags: ['FavoriteItem'],
		}),
		addToFavorites: builder.mutation({
			async queryFn({ userId, productId, productData = true }) {
				try {
					await db.addFavoriteProduct(userId, productId, productData)
					return { data: true }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			invalidatesTags: ['FavoriteItem'],
		}),
		removeFromFavorites: builder.mutation({
			async queryFn({ userId, productId }) {
				try {
					await db.removeFavoriteProduct(userId, productId)
					return { data: true }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			invalidatesTags: ['FavoriteItem'],
		}),
	}),
})

export const {
	useGetUserFavoriteQuery,
	useAddToFavoritesMutation,
	useRemoveFromFavoritesMutation
} = favoriteItemApi
