import { useAddPostMutation, useEditPostMutation, useGetPostByIdQuery } from "@/api/postsApi"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

function PostsForm({ postId }) {
	const { data: post, isLoading, isError } = useGetPostByIdQuery(postId, { skip: !postId }) // { skip: !postId } - пропустити, якщо id не передано
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	// Якщо приходить айді і пост існує, то лише раз, після рендеру, заповнити поля форми вже існуючими даними
	useEffect(() => {
		if (post && postId)
			setTitle(post.title)
			setContent(post?.content)
	}, [post, postId])

	// Отримання функції та стану з хуків RTK Query мутації
	const [addPost, { isLoading: isLoadingAdd, isSuccess: isSuccessAdd }] = useAddPostMutation()
	const [editPost, { isLoading: isLoadingEdit, isSuccess: isSuccessEdit }] = useEditPostMutation()
	// Отримання navigate з хуку useNavigate(), щоб зробити перенаправлення
	const navigate = useNavigate()

	// Функція обробки форми
	const handleSubmit = async (e) => {
		// Відміна стандартної дії
		e.preventDefault()

		try {
			// Якщо айді передано, то викликаємо редагування
			if (postId) {
				await editPost({
					id: postId, updatePost: { title, content }
				}).unwrap()

				// щоб втсигнути показати повідомлення
				setTimeout(() => {
					navigate('/posts')
				}, 1500)
			} else {
				// якщо ні, то додавання
				await addPost({ title, content }).unwrap()
				setTitle('')
				setContent('')

				// щоб втсигнути показати повідомлення
				setTimeout(() => {
					navigate('/posts')
				}, 1500)
				
			}
		} catch (error) {
			console.log(error.message)
		}
	}

	// Функція для отримання назви кнопки
	const getButtonTitle = () => {
		if (postId) return isLoadingEdit ? 'Loading...' : 'Edit'
		return isLoadingAdd ? 'Loading...' : 'Add'
	}

	if (isLoading) return <p>Завантаження...</p>
	if (isError) return <p>Помилка завантаження постів</p>

	return (
		<form onSubmit={handleSubmit}>
			<label style={{ display: 'block', marginBottom: '20px' }}>
				<span style={{ display: 'block', marginBottom: '10px'}}>Title*</span>
				<input type="text" value={title} onChange={e => setTitle(e.target.value)} style={{padding: '15px'}} required/>
			</label>
			<label style={{ display: 'block', marginBottom: '20px' }}>
				<span style={{ display: 'block', marginBottom: '10px' }}>Content</span>
				<textarea name="content" value={content} onChange={e => setContent(e.target.value)} style={{ padding: '15px', resize: 'vertical' }}></textarea>
			</label>
			<button type="submit" disabled={isLoadingAdd || isLoadingEdit} style={{ marginBottom: '20px' }}>{getButtonTitle()}</button>
			{(!postId && isSuccessAdd) && <p style={{ color: 'green' }}>Додавання посту успішне</p>}
			{(postId && isSuccessEdit) && <p style={{ color: 'green' }}>Редагування посту успішне</p>}
		</form>
	)
}

export default PostsForm