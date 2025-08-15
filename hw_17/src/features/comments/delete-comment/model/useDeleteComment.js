import { useDeleteCommentMutation } from "@/entities/post/comments"
import { useState } from "react"

function useDeleteComment() {
	const [isDeleting, setIsDeleting] = useState(false)
	const [deleteComment] = useDeleteCommentMutation()

	const handleDelete = async (id) => {
		setIsDeleting(true)
		try {
			await deleteComment(id).unwrap()
		} catch (e) {
			console.log(e)

			// handle error if needed
		}
	}
	return {
		handleDelete,
		isDeleting
	}
}

export default useDeleteComment;