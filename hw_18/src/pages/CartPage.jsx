import { useTranslation } from 'react-i18next'
import CartList from '../widgets/CartList/CartList'
import { useSelector } from 'react-redux'

export default function CartPage() {
	const user = useSelector((state) => state.auth.user)
	const { t } = useTranslation()

	if (!user) return <div>{t('Cart.permission')}</div>
	return (
		<div>
			<h1>{t('Cart.title')}</h1>
			<CartList userId={user.uid} />
		</div>
	)
}
