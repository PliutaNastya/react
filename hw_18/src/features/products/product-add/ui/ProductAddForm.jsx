import ProductForm from '@/entities/product/ui/ProductForm'
import { useAddProductWithLocaleMutation } from '@/entities/product/api/productApi'
import { useTranslation } from 'react-i18next'

export function ProductAddForm({ onSuccess }) {
	const { i18n } = useTranslation()
	const locale = i18n.resolvedLanguage || 'uk'
	const [create, { isLoading, error }] = useAddProductWithLocaleMutation()

	const handleSubmit = async ({ name, price, image, description }) => {
		const base = { price, image }
		const values = { title: name, description: description || '' }

		try {
			const id = await create({ base, locale, values }).unwrap()
			onSuccess?.(id)
		} catch (e) {
			console.error(e)
		}
	}
	return <ProductForm locale={locale} onSubmit={handleSubmit} isSubmitting={isLoading} submitError={error} />
}
