import ProductCard from '@/entities/product/ui/ProductCard'
import CartAddButton from '@/features/cart/cart-add/CartAddButton'
import FavoriteAddButton from '@/features/favorite/favorite-add/FavoriteAddButton'
import { ProductEditButton, ProductDeleteButton } from '@/features/products'
import { roles } from '@/shared/config/roles'

export function ProductCardWithActions({ product, user, role, onDeleted }) {
	const uid = user?.uid ?? null
	const isOwner = !!uid && product?.ownerId === uid

	const isAdmin = role === roles.admin
	const isManager = role === roles.manager
	const isUser = role === roles.user

	const canEdit = isAdmin || (isManager && isOwner)
	const canDelete = isAdmin || (isManager && isOwner)
	const canAddToCart = isUser && !!uid
	const canAddToFavorite = isUser && !!uid

	return (
		<ProductCard product={product}>
			<div className="flex flex-wrap gap-2 w-full justify-between mt-2">
				<div className="flex gap-2 flex-wrap">
					{canAddToCart && <CartAddButton product={product} userId={uid} />}
					{canAddToFavorite && (
						<FavoriteAddButton product={product} userId={uid} />
					)}
				</div>
				<div className="flex gap-2">
					{canEdit && <ProductEditButton productId={product.id} />}
					{canDelete && (
						<ProductDeleteButton productId={product.id} onDeleted={onDeleted} />
					)}
				</div>
			</div>
		</ProductCard>
	)
}
