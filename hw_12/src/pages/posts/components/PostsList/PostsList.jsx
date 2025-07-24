import PostCard from "./PostCard"

function PostsList( {postsList}) {

	return (
		<>
			{
				postsList.length ? <ul className="post-cards">
					{postsList.map(post => (
						<PostCard key={post.id} postData={post} />
					))}
				</ul> : <p>Список порожній</p>
			}
		</>

	)
}

export default PostsList