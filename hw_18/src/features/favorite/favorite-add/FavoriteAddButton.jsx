import { useAddToFavoritesMutation } from "@/entities/favoriteItem/api/favoriteItemApi";
import { useTranslation } from "react-i18next";

function FavoriteAddButton({ product, userId }) {
	const [addToFavorites, { isLoading }] = useAddToFavoritesMutation()
	const {t} = useTranslation()

	return ( 
		<button
			disabled={isLoading}
			onClick={() => addToFavorites({ userId, productId: product.id, productData: product })} style={{ width: '100%' }}
			className="px-1.5 py-1 rounded bg-green-600 hover:bg-green-700 text-white text-xs font-medium shadow focus:outline-none focus:ring-2 focus:ring-green-400 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
		>
			{isLoading ? t('buttons.addProcessing') : t('buttons.addToFav')}
		</button>
	 )
}

export default FavoriteAddButton;