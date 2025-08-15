import useDeleteUser from "../model/useDeleteUser"

function UserDeleteButton({ userId }) {
	const { handleDelete, isLoading, error } = useDeleteUser()

	if (error) return <p>Error</p>

	return (
		<button type="button" onClick={() => handleDelete(userId)} disabled={isLoading}>{isLoading ? 'Видалення...' : 'Видалити'}</button>
	)
}

export default UserDeleteButton