import axios from "axios"


const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const postsAPI = {
	fetchAllPosts: async (limit = 25) => {
		const res = await axios.get(`${BASE_URL}/posts`, {
			params: { _limit: limit},
		})
		return res.data
	}
}