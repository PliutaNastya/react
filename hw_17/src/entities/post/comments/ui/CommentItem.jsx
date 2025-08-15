import useDeleteComment from '@/features/comments/delete-comment/model/useDeleteComment'
import DeleteButton from '@/features/comments/delete-comment/ui/DeleteButton'
import { useSelector } from 'react-redux'

export function CommentItem({ comment }) {
	const { handleDelete, isDeleting } = useDeleteComment()
	const user = useSelector(state => state.auth.user)

	return (
		<div
			style={{
				borderBottom: '1px solid #ddd',
				padding: '5px 0',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<b>{comment.authorName}</b>: {comment.text}
			{user && <>
				{isDeleting && (
					<span style={{ marginLeft: 8, color: '#888' }}>Видаляється...</span>
				)}
				<DeleteButton handleDelete={() => handleDelete(comment.id)} isDeleting={isDeleting} />
			</>}

		</div>
	)
}
// ...existing code...
