import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

// 1 - Стоврення початкового стану
const initialState = {
	products: [
		{ id: 1, name: 'Wireless Headphones' },
		{ id: 2, name: 'Smartphone' },
		{ id: 3, name: 'Laptop' },
		{ id: 4, name: 'Bluetooth Speaker' },
		{ id: 5, name: 'Smartwatch' },
		{ id: 6, name: 'USB-C Cable' },
		{ id: 7, name: 'Gaming Mouse' },
		{ id: 8, name: 'Mechanical Keyboard' },
		{ id: 9, name: 'Monitor 24 inch' },
		{ id: 10, name: 'Webcam Full HD' },
		{ id: 11, name: 'Portable SSD' },
		{ id: 12, name: 'Power Bank 10000mAh' },
		{ id: 13, name: 'Drone with Camera' },
		{ id: 14, name: 'Action Camera' },
		{ id: 15, name: 'VR Headset' }
	],
	nameForFilter: '' 
}

// 2 - Опис редьюсерів
export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const newProduct = {
				id: uuidv4(),
				name: action.payload.name
			}
			state.products.push(newProduct)
		},
		setFilter: (state, action) => {
			state.nameForFilter = action.payload
		}
	}
})

export const { addProduct, setFilter } = productsSlice.actions

export default productsSlice.reducer