import { useGetUserFavoriteQuery } from "@/entities/favoriteItem/api/favoriteItemApi"
import FavoriteItemCardWithActions from "../FavoriteItemCardWithActions/FavoriteItemCardWithActions"
import { useTranslation } from "react-i18next"

function FavoriteList({ userId }) {
	const { data: favorites = [], isLoading } = useGetUserFavoriteQuery(userId)
	const { t } = useTranslation()
	const items = Object.entries(favorites).filter(([_, item]) => item)

	if (isLoading) return <div>{t('common.loadingMessage')}...</div>

	return (
		<div>
			{items.length === 0 && <div>{t('Cart.empty')}</div>}
			{items.map(([productId, item]) => (
				<FavoriteItemCardWithActions key={productId} item={item} userId={userId} productId={productId} />
			))}
		</div>
	)
}

export default FavoriteList