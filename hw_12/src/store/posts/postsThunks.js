import apiClient from "@/api/apiClient"
import initialPosts from "@/data/initialPosts"
import { createAsyncThunk} from "@reduxjs/toolkit"

// створення клієнту, який буде імітувати роботу бекенду
const postsApi = apiClient('posts', 500, initialPosts)

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
	// на випадок infinite scroll додаю булеву змінну
	async ({ pageNumber, itemsPerPage, isAddMore = false }, { rejectWithValue }) => {
		try {
			// звернення до API
			const response = await postsApi.getPaginated(pageNumber, itemsPerPage)
			return { ...response, isAddMore }
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const createPost = createAsyncThunk('posts/createPost',
	async ({ item }, { rejectWithValue }) => {
		try {
			const newItem = await postsApi.create(item)
			return newItem
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const deletePost = createAsyncThunk('posts/deletePost', 
	async ({ id }, { rejectWithValue }) => {
		try {
			const response = await postsApi.delete(id)
			return response
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)