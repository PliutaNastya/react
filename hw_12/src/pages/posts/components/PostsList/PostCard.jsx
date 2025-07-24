import PostsContext from "@/context/PostsContext"
import { useContext } from "react"

function PostCard({ postData }) {
	const {onDelete} = useContext(PostsContext)

	return (
		<li className="post-card">
			<h3 className="post-card__title">{postData.title}</h3>
			<p className="post-card__text">{postData.body}</p>
			<div className="post-card__info">
				<p>Likes: {postData.likesNumber}</p>
				<p>Dislikes: {postData.dislikesNumber}</p>
				<p>Author: {postData.authorId}</p>
			</div>
			<button type="button" className="button" onClick={() => onDelete(postData.id)}>Видалити</button>
		</li>
	)
}

export default PostCard