import { useTranslation } from 'react-i18next'
import { useGetCartLocalizedQuery } from '../../entities/cartItem/api/cartItemApi'
import CartItemCardWithActions from '../CartItemCardWithActions/CartItemCardWithActions'

export default function CartList({ userId }) {
	const { i18n, t } = useTranslation()
	const locale = i18n.resolvedLanguage || 'uk'

	// очікуємо масив елементів
	const { data: items = [], isLoading } = useGetCartLocalizedQuery({ userId, locale })

	const total = items.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0)

	if (isLoading) return <div>{t('common.loadingMessage')}...</div>

	return (
		<div>
			{items.length === 0 && <div>{t('Cart.empty')}</div>}

			{items.map((item) => (
				<CartItemCardWithActions
					key={item.id}
					item={item}
					userId={userId}
					productId={item.id}
				/>
			))}

			{items.length > 0 && (
				<div style={{ marginTop: 16, fontWeight: 'bold' }}>
					{t('Cart.totalPrice')}: {total}
				</div>
			)}
		</div>
	)
}
