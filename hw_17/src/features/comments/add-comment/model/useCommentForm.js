import { useCreateCommentMutation } from '@/entities/post/comments'
import { useState } from 'react'

export function useCommentForm({ postId }) {
	const [content, setContent] = useState('')
	const [createComment, { isLoading }] = useCreateCommentMutation()

	const onSubmit = async (e) => {
		e.preventDefault()
		if (!content.trim()) return
		await createComment({ postId, text: content })
		setContent('')
	}

	return {
		onSubmit,
		isLoading,
		content,
		setContent
	}
}


