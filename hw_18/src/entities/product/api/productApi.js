import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from '../../../shared/api/DbOperations'

const db = new DbOperations('products')

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['Product'],
	endpoints: (builder) => ({
		// --- отримати всі продукти, враховуючи багатомовність
		getAllProductsLocalized: builder.query({
			async queryFn(locale = 'uk') {
				try {
					const products = await db.getAllLocalized(locale)
					return { data: products }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			providesTags: ['Product'],
		}),

		// отримтаи один продукті з врахуванням багатомовності
		getProductByIdLocalized: builder.query({
			async queryFn({ id, locale = 'uk' }) {
				try {
					const product = await db.getProductLocalized(id, locale)
					return { data: product }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			providesTags: ['Product'],
		}),

		// додати новий продукт, враховуючи багатомовність
		// очікує: { base, locale, values }
		// де base = { price, images, ownerId, ... }, values = { title, description, ... }
		addProductWithLocale: builder.mutation({
			async queryFn({ base = {}, locale = 'uk', values = {} }) {
				try {
					const id = await db.add({ ...base, i18n: { [locale]: values } })
					return { data: id }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			invalidatesTags: ['Product'],
		}),

		// часткове оновлення перекладу конкретної локалі
		// очікує: { id, locale, values }
		updateProductLocale: builder.mutation({
			async queryFn({ id, locale, values }) {
				try {
					await db.setProductLocale(id, locale, values)
					return { data: true }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			invalidatesTags: ['Product'],
		}),
		// без багатомовності
		getAllProducts: builder.query({
			async queryFn() {
				try {
					const products = await db.getAll()
					return { data: products }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			providesTags: ['Product'],
		}),
		getProductById: builder.query({
			async queryFn(id) {
				try {
					const product = await db.getById(id)
					return { data: product }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			providesTags: ['Product'],
		}),
		addProduct: builder.mutation({
			async queryFn(product) {
				try {
					await db.add(product)
					return { data: true }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			invalidatesTags: ['Product'],
		}),
		updateProduct: builder.mutation({
			async queryFn({ id, data }) {
				try {
					await db.update(id, data)
					return { data: true }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			invalidatesTags: ['Product'],
		}),
		deleteProduct: builder.mutation({
			async queryFn(id) {
				try {
					await db.delete(id)
					return { data: true }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			invalidatesTags: ['Product'],
		}),
	}),
})

export const {
	// багатомовність
	useGetAllProductsLocalizedQuery,
	useGetProductByIdLocalizedQuery,
	useAddProductWithLocaleMutation,
	useUpdateProductLocaleMutation,
	// без багатомовності
	useGetAllProductsQuery,
	useGetProductByIdQuery,
	useAddProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation,
} = productApi
