import { useDeleteUserMutation } from "@/entities/user/api/userApi"

function useDeleteUser() {
	const [deleteUserMutation, { isLoading, error }] = useDeleteUserMutation()
	
	const handleDelete = async (userId) => {
		if (window.confirm('Ви впевнені, що бажаєте видалити користувача?')) {
			try {
				await deleteUserMutation(userId).unwrap()
				return true
			} catch (error) {
				console.log(error)
				return false
			}
		}
	}
	return {
		handleDelete,
		isLoading,
		error
	}
}

export default useDeleteUser