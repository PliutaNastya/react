import { useState } from "react"

function useUserForm() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return {
		name,
		setName,
		email,
		setEmail,
		password,
		setPassword
	}
}

export default useUserForm