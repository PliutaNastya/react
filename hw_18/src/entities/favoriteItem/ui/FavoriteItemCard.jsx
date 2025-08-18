import { useTranslation } from "react-i18next"

function FavoriteItemCard({ item, children }) {
	const { t } = useTranslation()

	return (
		<div style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
			<div>{item.name}</div>
			<div>{t('Cart.price')}: {item.price}</div>
			{children}
		</div>
	)
}

export default FavoriteItemCard