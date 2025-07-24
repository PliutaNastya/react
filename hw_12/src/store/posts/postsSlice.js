import { createSlice } from '@reduxjs/toolkit'
import { createPost, deletePost, fetchPosts } from './postsThunks'

const initialState = {
	postsList: [],
	currentPageNumber: 1,
	postsAmountPerPage: 5,
	totalPagesAmount: 1,
	// асинхронні операції, тому ще додаємо статус та помилку
	status: 'idle',
	error: null,
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		// так як номер сторінки визначається натисканням на кнопку:
		setCurrentPage: (state, action) => {
			state.currentPageNumber = action.payload
		}
	},
	extraReducers: (builder) => {
		// 1 - очікування
		builder
			// Отримання постів
			.addCase(fetchPosts.pending, (state) => {
				// статус очікування
				state.status = 'loading'
				// скидання минулих помилок
				state.error = null
			})
			// все виконалось добре
			.addCase(fetchPosts.fulfilled, (state, action) => {
				// в action.payload потрапить response з fetchPosts
				// статус успішний
				state.status = 'success'

				// Дані з DBClient readPaginated
				// return {
				// items: items,
				// pagination: {
				// totalItems: totalItems,
				// totalPages: totalPages,
				// currentPage: page,
				// pageSize: limit,
				// },
				// }
				const paginationData = action.payload.pagination
				state.currentPageNumber = paginationData.currentPage
				state.postsAmountPerPage = paginationData.pageSize
				state.totalPagesAmount = paginationData.totalPages
				
				// В response з fetchPosts потрапляє ще змінна яка відповідає за те чи треба додавати пости до вже показаних, чи просто заміняти
				if (action.payload.isAddMore) {
					// якщо isAddMore = true, то додаю до вже показаних постів нові
					state.postsList = [...state.postsList, ...action.payload.items] 
				} else {
					// якщо навпаки, то просто виводжу нову порцію постів
					state.postsList = action.payload.items
				}
			})
			// якщо помилка
			.addCase(fetchPosts.rejected, (state, action) => {
				// статус провалено
				state.status = 'failed'
				// визначення помилки
				state.error = action.payload
			})
			// Додавання постів
			.addCase(createPost.pending, (state) => {
				// статус очікування
				state.status = 'loading'
				// скидання минулих помилок
				state.error = null
			})
			// все виконалось добре
			.addCase(createPost.fulfilled, (state, action) => {
				// в action.payload потрапить response з fetchPosts
				// статус успішний
				state.status = 'success'

				state.postsList.unshift(action.payload)
			})
			// якщо помилка
			.addCase(createPost.rejected, (state, action) => {
				// статус провалено
				state.status = 'failed'
				// визначення помилки
				state.error = action.payload
			})
			// Видалення постів
			.addCase(deletePost.pending, (state) => {
				// статус очікування
				state.status = 'loading'
				// скидання минулих помилок
				state.error = null
			})
			// все виконалось добре
			.addCase(deletePost.fulfilled, (state, action) => {
				// статус успішний
				state.status = 'success'

				state.postsList = state.postsList.filter(post => post.id !== action.payload)
			})
			// якщо помилка
			.addCase(deletePost.rejected, (state, action) => {
				// статус провалено
				state.status = 'failed'
				// визначення помилки
				state.error = action.payload
			})
	}
})

// Action creators are generated for each case reducer function
export const { setCurrentPage } = postsSlice.actions

export default postsSlice.reducer