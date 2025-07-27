import { useParams } from "react-router"
import PostsForm from "./PostsPage/PostsForm"

const PostEditPage = () => {

	const { id } = useParams()

	return <>

		{id ? <PostsForm postId={id} /> : <PostsForm />}

	</>
}

export default PostEditPage
