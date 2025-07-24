import { useState } from "react"

function PostsForm({ onSubmit }) {

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [authorId, setAuthorId] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		const trimTitle = title.trim()
		const trimBody = body.trim()
		const trimAuthorId = authorId.trim()

		if(trimTitle === '' || trimBody === '' || trimAuthorId === '') return

		const newPost = {
			title: trimTitle,
			body: trimBody,
			authorId: trimAuthorId,
			createdAt: new Date().toISOString()
		}

		onSubmit(newPost)

		setTitle('')
		setBody('')
		setAuthorId('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<span>Заголовок *</span>
				<input type="text" value={title} onChange={e => setTitle(e.target.value)} />
			</label>
			<label>
				<span>Текст посту *</span>
				<textarea name="postText" value={body} id="postText" onChange={e => setBody(e.target.value)}></textarea>
			</label>
			<label>
				<span>ID Автора *</span>
				<input type="text" value={authorId} onChange={e => setAuthorId(e.target.value)} />
			</label>
			<button type="submit" className="button">Додати пост</button>
		</form>
	)
}

export default PostsForm