import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
	const { i18n } = useTranslation()
	const lang = i18n.resolvedLanguage || i18n.language || 'en'

	const handleChangeLang = (e) => {
		const value = e.target.value
		//-----змінюємо мову
		i18n.changeLanguage(value)

		try {
			if (typeof window !== 'undefined') {
				localStorage.setItem('i18nextLng', value)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<label className="relative inline-flex items-center">
			<span className="sr-only">Change language</span>

			<select
				value={lang}
				onChange={handleChangeLang}
				className="appearance-none pl-9 pr-8 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                   dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:focus:ring-indigo-400
                   disabled:opacity-60 disabled:cursor-not-allowed transition"
				title="Language"
				aria-label="Language"
			>
				<option value="en">EN</option>
				<option value="ua">UA</option>
			</select>
		</label>
	)
}
