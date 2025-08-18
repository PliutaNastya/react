import { useTranslation } from 'react-i18next'
import { useGetFavoritesLocalizedQuery } from '@/entities/favoriteItem/api/favoriteItemApi'
import FavoriteItemCardWithActions from '../FavoriteItemCardWithActions/FavoriteItemCardWithActions'

function FavoriteList({ userId }) {
	const { i18n, t } = useTranslation()
	const locale = i18n.resolvedLanguage || 'uk'

	const { data: items = [], isLoading } =
		useGetFavoritesLocalizedQuery({ userId, locale })

	if (isLoading) return <div>{t('common.loadingMessage')}...</div>

	if (!items.length) return <div>{t('Favorites.empty', 'Список порожній')}</div>

	return (
		<div>
			{items.map((item) => (
				<FavoriteItemCardWithActions
					key={item.id}
					item={item}
					userId={userId}
					productId={item.id}
				/>
			))}
		</div>
	)
}

export default FavoriteList
