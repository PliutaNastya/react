import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '@/entities/product/model/productsApi'
import cartReducer from '@/features/cart/model/cartSlice'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
	  getDefaultMiddleware({
		  serializableCheck: {
			  ignoredActions: [
				  'productsApi/executeQuery/fulfilled',
				  'productsApi/executeQuery/pending',
			  ],
			  ignoredPaths: ['productsApi.queries'],
		  },
	  }).concat(productsApi.middleware),
})
