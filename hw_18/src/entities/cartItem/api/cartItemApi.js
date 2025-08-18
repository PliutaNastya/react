import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from '../../../shared/api/DbOperations'

const prodDb = new DbOperations('products')
const db = new DbOperations('carts')

export const cartItemApi = createApi({
	reducerPath: 'cartItemApi',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['CartItem'],
	endpoints: (builder) => ({
		// отримання даних корзини з врахуванням багатомовності
		getCartLocalized: builder.query({
			async queryFn({ userId, locale = 'uk' }) {
				try {
					const cartMap = (await db.getCartByUserId(userId)) || {} // { [productId]: { quantity, addedAt } }
					const ids = Object.keys(cartMap)
					if (!ids.length) return { data: [] }

					const products = await Promise.all(ids.map(id => prodDb.getById(id)))
					const items = products
						.filter(Boolean)
						.map(p => ({
							id: p.id,
							quantity: cartMap[p.id]?.quantity || 1,
							price: p.price,
							image: p.image,
							_tr: p?.i18n?.[locale] || p?.i18n?.uk || p?.i18n?.en || {},
						}))

					return { data: items }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			providesTags: ['CartItem'],
		}),
		getUserCart: builder.query({
			async queryFn(userId) {
				try {
					const cart = await db.getCartByUserId(userId)
					return { data: cart }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			providesTags: ['CartItem'],
		}),
		addOrIncreaseToCart: builder.mutation({
			async queryFn({ userId, productId, product }) {
				try {
					let cart = await db.getCartByUserId(userId)
					// Якщо carts/{userId} не існує — створити документ
					if (!cart || Object.keys(cart).length === 0) {
						cart = { [productId]: { ...product, quantity: 1 } }
						await db.setCartByUserId(userId, cart)
						return { data: true }
					}
					const prev = cart[productId]
					const quantity = prev ? prev.quantity + 1 : 1
					await db.updateCartProduct(userId, productId, {
						...product,
						quantity,
					})
					return { data: true }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			invalidatesTags: ['CartItem'],
		}),
		decreaseQuantity: builder.mutation({
			async queryFn({ userId, productId }) {
				try {
					const cart = await db.getCartByUserId(userId)
					const prev = cart[productId]
					if (!prev) return { data: true }
					const quantity = prev.quantity > 1 ? prev.quantity - 1 : 1
					await db.updateCartProduct(userId, productId, { ...prev, quantity })
					return { data: true }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			invalidatesTags: ['CartItem'],
		}),
		removeFromCart: builder.mutation({
			async queryFn({ userId, productId }) {
				try {
					await db.removeCartProduct(userId, productId)
					return { data: true }
				} catch (error) {
					return { error: { message: error.message } }
				}
			},
			invalidatesTags: ['CartItem'],
		}),
	}),
})

export const {
	useGetCartLocalizedQuery,
	useGetUserCartQuery,
	useAddOrIncreaseToCartMutation,
	useDecreaseQuantityMutation,
	useRemoveFromCartMutation,
} = cartItemApi
