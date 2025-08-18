import CartItemCard from "@/entities/cartItem/ui/CartItemCard"
import { CartDecreaseButton, CartIncreaseButton, CartRemoveButton } from "@/features/cart"

function CartItemCardWithActions({ item, userId, productId }) {
	return (
		<CartItemCard item={item}>
			<CartDecreaseButton userId={userId} productId={productId} />
			<span style={{ margin: '0 8px' }}>{item.quantity || 1}</span>
			<CartIncreaseButton userId={userId} productId={productId} product={item}
			/>
			<CartRemoveButton userId={userId} productId={productId} />
		</CartItemCard>
	)
}

export default CartItemCardWithActions