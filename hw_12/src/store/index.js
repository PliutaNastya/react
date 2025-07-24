import { configureStore } from '@reduxjs/toolkit'
import paymentsSliceReducer from './paymentsSlice'
import postsSliceReducer from './posts/postsSlice'

const store = configureStore({
	reducer: {
		payments: paymentsSliceReducer,
		posts: postsSliceReducer
	},
})

export default store