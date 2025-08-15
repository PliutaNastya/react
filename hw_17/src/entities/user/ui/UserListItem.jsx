import UserDeleteButton from '@/features/user/delete-user/ui/UserDeleteButton'
import React from 'react'

export function UserListItem({ user, deleteButton }) {
	return (
		<div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px', borderBottom: '1px solid #ccc', padding: '8px 0' }}>
			<strong>{user.name}</strong>
			<span>{user.email}</span>
			<span>Роль: {user.role}</span>
			{deleteButton}
		</div>
	)
}
