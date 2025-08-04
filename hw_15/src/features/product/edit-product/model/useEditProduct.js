import {
	useGetProductByIdQuery,
	useUpdateProductMutation,
} from '@/entities/product'
import { useNavigate } from 'react-router'
import { useProductForm } from '@/features/product/product-form/model/useProductForm'

export const useEditProduct = (productId) => {
	const navigate = useNavigate()
	const {
		data: productData,
		isLoading: isLoadingProduct,
		error: loadError,
	} = useGetProductByIdQuery(productId)

	const [updateProductMutation, { isLoading: isUpdating, error: updateError }] =
		useUpdateProductMutation()

	const { title, setTitle, price, setPrice } = useProductForm(
		productData?.title || '',
		productData?.price || ''
	)

	const editProduct = async () => {
		try {
			const updatedData = {
				title,
				titleLowercase: title.toLowerCase(), // 👈 обов’язкове поле для пошуку
				price: +price,
			}

			await updateProductMutation({
				id: productId,
				data: updatedData,
			}).unwrap()
			navigate('/products')
			return true
		} catch (e) {
			console.error('Failed to update product:', e)
			return false
		}
	}

	return {
		title,
		setTitle,
		price,
		setPrice,
		isLoadingProduct,
		loadError,
		isUpdating,
		updateError,
		editProduct,
	}
}
