import { useState } from "react"
import useUserForm from "../model/useUserForm"

function UserForm({ onSubmit, isLoading }) {
	const { name, setName, email, setEmail, password, setPassword } = useUserForm()
	const [role, setRole] = useState('user')

	const onClear = () => {
		setName('')
		setEmail('')
		setPassword('')
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit?.({ name, email, password, role }, e)
		onClear()
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md w-full mb-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur rounded-2xl shadow p-6 space-y-5"
		>
			<div className="space-y-1.5">
				<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-zinc-200">
					Ім’я
				</label>
				<input
					id="name"
					name="name"
					type="text"
					autoComplete="name"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="block w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2
                     text-gray-900 dark:text-zinc-100 placeholder-gray-400 focus:outline-none
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
					placeholder="Введіть ім’я"
				/>
			</div>

			<div className="space-y-1.5">
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-zinc-200">
					Email
				</label>
				<input
					id="email"
					name="email"
					type="email"
					autoComplete="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="block w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2
                     text-gray-900 dark:text-zinc-100 placeholder-gray-400 focus:outline-none
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
					placeholder="you@example.com"
				/>
			</div>

			<div className="space-y-1.5">
				<label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-zinc-200">
					Пароль
				</label>
				<div className="relative">
					<input
						id="password"
						name="password"
						autoComplete="new-password"
						required
						minLength={6}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="block w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2
                       text-gray-900 dark:text-zinc-100 placeholder-gray-400 focus:outline-none
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-12"
						placeholder="••••••••"
					/>
				</div>
				<p className="text-xs text-gray-500 dark:text-zinc-400">
					Мінімум 6 символів.
				</p>
			</div>

			<div className="pt-2 flex items-center justify-end gap-3">
				<button
					type="reset"
					onClick={onClear}
					className="inline-flex items-center rounded-xl border border-gray-300 dark:border-zinc-700 px-4 py-2
                     text-sm font-medium text-gray-700 dark:text-zinc-200 hover:bg-gray-50 dark:hover:bg-zinc-800
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					Очистити
				</button>

				<button
					type="submit"
					disabled={isLoading}
					className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white
                     hover:bg-indigo-700 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					{isLoading ? 'Збереження…' : 'Зберегти'}
				</button>
			</div>
		</form>
	)
}

export default UserForm