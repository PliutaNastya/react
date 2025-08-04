// Імпортуємо нову кнопку з фічі add-product
import { AddProductButton } from '@/features/product/add-product/ui/AddProductButton'
import ProductListContainer from '@/widgets/ProductListWidget'

export default function ProductsPage() {
	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-3xl font-bold text-white">Products List</h2>
				{/* Використовуємо кнопку з фічі */}
				<AddProductButton />
			</div>
			<ProductListContainer />
		</div>
	)
}
