import { useUpdateUserRoleMutation, useAddUserMutation } from '@/entities/user/api/userApi'
import UserForm from '@/entities/user/ui/UserForm'

export function UserEditForm({ user = {}, onSuccess }) {
	const [updateUserRole, { isLoading: isUpdating, error: updateError }] =
		useUpdateUserRoleMutation()
	const [addUser, { isLoading: isAdding, error: addError }] =
		useAddUserMutation()

	const handleSubmit = async ({ email, displayName, role }, e) => {
		if (e?.preventDefault) e.preventDefault()

		try {
			if (user?.id) {
				await updateUserRole({ uid: user.id, role }).unwrap()
			} else {
				await addUser({ email, displayName, role }).unwrap()
			}
			onSuccess?.()
		} catch (err) {
			console.error('Error:', err)
		}

	}

	return (
		<UserForm user={user} onSubmit={handleSubmit} isSubmitting={isUpdating || isAdding} submitError={updateError || addError} />
	)
}
