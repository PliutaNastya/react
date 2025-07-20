import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from './postsThunk'

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		loading: false,
		error: null
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.loading = true,
				state.error = null
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.loading = false,
				state.posts = action.payload,
				state.error = null
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.loading = false,
				state.error = action.payload
		})
	}
})

export default postsSlice.reducer