export const apiRoutes = {
	auth: {
		login: '/auth/login',
		logout: '/auth/logout',
		refresh: '/auth/refresh',
		profile: '/auth/profile',
	},
	users: '/users',
	deleteUser: (id) => `/users/${id}`,
	posts: '/posts',
	comments: '/comments',
	getCommentsByPostId: '/comments',
	//   getCommentsByPostId: (postId) => `/comments?postId=${postId}`,
}
