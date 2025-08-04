import { useAddProductMutation } from '@/entities/product'
import { useNavigate } from 'react-router'

export const useAddProduct = () => {
	const [addProductMutation, { isLoading, error }] = useAddProductMutation()
	const navigate = useNavigate()

	const addProduct = async (productData) => {
		try {
			const dataWithLowercase = {
				...productData,
				titleLowercase: productData.title.toLowerCase(),
			}

			await addProductMutation(dataWithLowercase).unwrap()
			navigate('/products')
			return true
		} catch (e) {
			console.error('Failed to add product:', e)
			return false
		}
	}

	return { addProduct, isLoading, error }
}
