import UserForm from "../../form-user/ui/UserForm"
import useAddUser from "../model/useAddUser"

function AddUserModal() {
	const { submitForm, isLoading, error } = useAddUser()

	if (error) return <p>Error</p>
	return (
		<UserForm onSubmit={submitForm} isLoading={isLoading} />
	)
}

export default AddUserModal