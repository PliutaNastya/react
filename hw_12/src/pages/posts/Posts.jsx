import { useDispatch, useSelector } from "react-redux"
import PostsList from "./components/PostsList"
import { useEffect } from "react"
import { createPost, deletePost, fetchPosts } from "@/store/posts/postsThunks"
import PaginationBlock from "./components/PaginationBlock"
import { setCurrentPage } from "@/store/posts/postsSlice"
import PostsForm from "./components/PostsForm"
import PostsContext from "@/context/PostsContext"

function Posts() {

	// деструктуризація даних зі стейту
	const { postsList, currentPageNumber, postsAmountPerPage, totalPagesAmount, status, error } = useSelector(state => state.posts)

	const dispatch = useDispatch()

	// показ постів
	useEffect(() => {
		dispatch(fetchPosts({ pageNumber: currentPageNumber, itemsPerPage: postsAmountPerPage }))
	}, [dispatch, currentPageNumber, postsAmountPerPage])

	// функція зміни сторінки
	const onPageChange = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber))
	}

	// функція для додавання нового посту
	const onSubmit = (newItem) => {
		dispatch(createPost({ item: newItem }))

		// якщо були не на першій сторінці, то повернутись на першу
		dispatch(setCurrentPage(1))
		// додавати на початок, тому сторінка перша
		dispatch(fetchPosts({ pageNumber: 1, itemsPerPage: postsAmountPerPage }))
	}

	// функція для видалення посту
	const onDelete = (id) => {
		dispatch(deletePost({ id }))

		// з postsList.length === 0 не спрацювало чомусь
		if (postsList.length === 1 && currentPageNumber > 1) {
			dispatch(setCurrentPage(currentPageNumber - 1))
			dispatch(fetchPosts({ pageNumber: currentPageNumber - 1, itemsPerPage: postsAmountPerPage }))
		} else {
			dispatch(fetchPosts({ pageNumber: currentPageNumber, itemsPerPage: postsAmountPerPage }))
		}
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
						<PaginationBlock currentPageNumber={currentPageNumber} totalPagesAmount={totalPagesAmount} onPageChange={onPageChange} />
					</div>
				</section>
			</PostsContext>
		)
	}

	export default Posts