import { configureStore } from '@reduxjs/toolkit'
import productsSliceReducer from '../slices/products/productsSlice'
import postsSliceReducer from '../slices/posts/postsSlice'

export const store = configureStore({
	reducer: {
		products: productsSliceReducer,
		posts: postsSliceReducer
	},
})