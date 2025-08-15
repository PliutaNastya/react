import { UserList } from '@/widgets/userList/UserList'

import { roles } from '@/shared/config/roles'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth'
import AddUserModal from '@/features/user/add-user/ui/AddUserModal'
import { useState } from 'react'

export default function UsersPage() {
	const user = useSelector(selectAuthUser)
	const [isFormOpen, setIsFormOpen] = useState(false)

	if (!user || user.role !== roles.admin) {
		return (
			<div>
				Доступ заборонено. Ця сторінка доступна лише для адміністратора.
			</div>
		)
	}

	return (
		<div>
			<h1 className="mb-5">Користувачі</h1>
			<button type="button" onClick={() => setIsFormOpen(true)} className="mb-5">
				Додати нового користувача
			</button>
			{isFormOpen && <AddUserModal />}
			<UserList />
		</div>
	)
}
