import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	paymentsList: [
		{
			id: 1,
			money: 111,
			category: 'car'
		}
	]
}

export const paymentsSlice = createSlice({
	name: 'payments',
	initialState,
	reducers: {
		// reducer - це функція, яка приймає state та action (її задача змінити стан) і завдяки Immer library, яку використовує Redux Toolkit ми можете "мутувати" state, але насправді ніякої мутації стейту не відбудеться
		addPayment: (state, action) => {
			// задача цього редьюсера - додати новий об'єкт в paymentsList
			state.paymentsList.push({
				// треба id, бо кожен об'єкт має мати унікальний ідентифікатор
				id: new Date().getTime(),
				// action.payload - це об'єкт, що буде містити суму грошей та категорію
				...action.payload
			})
		},
		deleteItem: (state, action) => {
			state.paymentsList = state.paymentsList.filter(payment => payment.id !== action.payload)
		},
		repeatItem: (state, action) => {
			const payloadItem = state.paymentsList.find(item => item.id === action.payload)
			state.paymentsList.push({
				// розпарсимо всі поля, бо треба перезаписати id
				...payloadItem,
				id: new Date().getTime(),
			})
		}
	},
})

// Action creators are generated for each case reducer function
// actions формуюються автоматично
export const { addPayment, deleteItem, repeatItem } = paymentsSlice.actions
// reducer також формується автоматично
export default paymentsSlice.reducer