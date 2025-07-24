import { useDispatch, useSelector } from "react-redux"
import PostsList from "./components/PostsList"
import { useEffect } from "react"
import { createPost, deletePost, fetchPosts } from "@/store/posts/postsThunks"
import { setCurrentPage } from "@/store/posts/postsSlice"
import PostsForm from "./components/PostsForm"
import PostsContext from "@/context/PostsContext"

function PostsInfiniteScroll() {

	// деструктуризація даних зі стейту
	const { postsList, currentPageNumber, postsAmountPerPage, totalPagesAmount, status, error } = useSelector(state => state.posts)

	const dispatch = useDispatch()

	// завантаження першої сторінки (треба вказати саме першу, бо інакше не виходить, щоб додавались нові пости замість перезаписування старих, тобто не треба залежати від currentPage)
	// за підвантаження наступних постів відповідатиме інший useEffect
	useEffect(() => {
		dispatch(fetchPosts({ pageNumber: 1, itemsPerPage: postsAmountPerPage }))
	}, [dispatch, postsAmountPerPage])

	useEffect(() => {
		// функція додавання нових постів
		const showMoreCards = () => {
			// деструктуризація значень прокрутки
			const { scrollTop, scrollHeight, clientHeight } = document.documentElement

			// Якщо майже доскролила донизу
			if (scrollTop + clientHeight >= scrollHeight - 150) {
				// то перевіряю чи не всі пости вже показані
				if (currentPageNumber < totalPagesAmount) {
					// оновлюю список, додаючи нові пости
					dispatch(fetchPosts({ pageNumber: currentPageNumber + 1, itemsPerPage: postsAmountPerPage, isAddMore: true }))
					dispatch(setCurrentPage(currentPageNumber + 1))
				}
			}
		}

		// додаю слухач події скролл
		window.addEventListener('scroll', showMoreCards)
		// відміняю слухач події скролл
		return () => window.removeEventListener('scroll', showMoreCards)
	}, [dispatch, currentPageNumber, totalPagesAmount, status, postsAmountPerPage])

	const onSubmit = (newItem) => {
		dispatch(createPost({ item: newItem }))

		dispatch(setCurrentPage(1))
		dispatch(fetchPosts({ pageNumber: 1, itemsPerPage: postsAmountPerPage }))
	}

	const onDelete = (id) => {
		dispatch(deletePost({ id }))
		dispatch(fetchPosts({ pageNumber: currentPageNumber, itemsPerPage: postsAmountPerPage }))
	}

	return (
		<PostsContext value={{ onDelete }}>
			<section className="posts">
				<div className="posts__container">
					{error && <p>Error: {error}</p>}
					<PostsForm onSubmit={onSubmit} />
					<PostsList postsList={postsList} />
					{status === 'loading' && <p className="loading">Завантаження...</p>}
					{status === 'failed' && <p className="error">Помилка: {error}</p>}
				</div>
			</section>
		</PostsContext>
	)
}

export default PostsInfiniteScroll