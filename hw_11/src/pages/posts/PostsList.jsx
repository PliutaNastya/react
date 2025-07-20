import Spinner from "@/components/Spinner"
import { fetchPosts } from "@/redux/slices/posts/postsThunk"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

function PostsList() {
	const { posts, loading, error } = useSelector(state => state.posts)
	console.log(posts)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	return (
		<section className="posts">
			<div className="posts__container">
				<h1>Posts</h1>
				<ul className="list">
					{loading && <Spinner />}
					{error && <p>Error: {error}</p>}
					{
						posts.map(post => (
							<li key={post.id}>{post.title}</li>
						))
					}
				</ul>
			</div>
		</section>
	)
}

export default PostsList