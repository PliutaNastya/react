import { useTranslation } from "react-i18next"

export default function CartItemCard({ item, children }) {
	const quantity = item.quantity || 1
	const total = (item.price || 0) * quantity
	const { t } = useTranslation()

	return (
		<div style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
			<div>{item.name}</div>
			<div>{t('Cart.price')}: {item.price}</div>
			<div>{t('Cart.sum')}: {total}</div>
			{children}
		</div>
	)
}
