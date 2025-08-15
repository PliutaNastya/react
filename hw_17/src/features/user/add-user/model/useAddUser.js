import { useAddUserMutation } from "@/entities/user/api/userApi"
import UserForm from "../../form-user/ui/UserForm"

function useAddUser() {
	const [addUserMutation, { isLoading, error }] = useAddUserMutation()

	const submitForm = async (data) => {
		try {
			await addUserMutation(data).unwrap()
			return true
		} catch (error) {
			console.log(error)
			return false
		}
	}
	return {
		submitForm,
		isLoading,
		error
	}
}

export default useAddUser