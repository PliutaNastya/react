import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from '../../../shared/api/DbOperations'

const favDb = new DbOperations('favorites')
const prodDb = new DbOperations('products')

export const favoriteItemApi = createApi({
	reducerPath: 'favoriteItemApi',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['FavoriteItem'],
	endpoints: (builder) => ({
		// список обраних з врахуванням багатомовності
		getFavoritesLocalized: builder.query({
			async queryFn({ userId, locale = 'uk' }) {
				try {
					const favMap = (await favDb.getFavoriteByUserId(userId)) || {} // { [productId]: true|{...} }
					const ids = Object.keys(favMap)
					if (!ids.length) return { data: [] }

					const products = await Promise.all(ids.map((id) => prodDb.getById(id)))
					const items = products
						.filter(Boolean)
						.map((p) => ({
							id: p.id,
							price: p.price,
							image: p.image,
							_tr: p?.i18n?.[locale] || p?.i18n?.uk || p?.i18n?.en || {}, // фолбек
						}))

					return { data: items }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			providesTags: ['FavoriteItem'],
		}),
		getUserFavorite: builder.query({
			async queryFn(userId) {
				try {
					const cart = await favDb.getFavoriteByUserId(userId)
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
					await favDb.addFavoriteProduct(userId, productId, productData)
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
					await favDb.removeFavoriteProduct(userId, productId)
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
	useGetFavoritesLocalizedQuery,
	useGetUserFavoriteQuery,
	useAddToFavoritesMutation,
	useRemoveFromFavoritesMutation
} = favoriteItemApi
