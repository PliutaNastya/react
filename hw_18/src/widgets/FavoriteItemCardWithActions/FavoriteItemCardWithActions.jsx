import FavoriteItemCard from "@/entities/favoriteItem/ui/FavoriteItemCard"
import FavoriteRemoveButton from "@/features/favorite/favorite-remove/FavoriteRemoveButton"

function FavoriteItemCardWithActions({ item, userId, productId }) {

	return (
		<FavoriteItemCard item={item} userId={userId} productId={productId}>
			<FavoriteRemoveButton userId={userId} productId={productId} />
		</FavoriteItemCard>
	)
}

export default FavoriteItemCardWithActions