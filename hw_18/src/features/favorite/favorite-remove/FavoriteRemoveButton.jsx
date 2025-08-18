import { useRemoveFromFavoritesMutation } from '@/entities/favoriteItem/api/favoriteItemApi'
import { useTranslation } from 'react-i18next'

export default function FavoriteRemoveButton({ userId, productId }) {
	const [removeFromFavorites, { isLoading }] = useRemoveFromFavoritesMutation()
	const { t } = useTranslation()

	return (
		<button
			className="px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-medium" disabled={isLoading}
			onClick={() => removeFromFavorites({ userId, productId })}
		>
			{t('buttons.delete')}
		</button>
	)
}
