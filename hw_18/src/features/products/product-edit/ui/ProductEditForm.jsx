import ProductForm from '@/entities/product/ui/ProductForm'
import { useUpdateProductLocaleMutation, useUpdateProductMutation } from '@/entities/product/api/productApi'
import { useTranslation } from 'react-i18next'

export function ProductEditForm({ product, onSuccess }) {
	const { i18n } = useTranslation()
	const locale = i18n.resolvedLanguage || 'uk'

	const [updateProduct, { isLoading: isBaseLoading, error: baseError }] = useUpdateProductMutation()
	const [updateLocale, { isLoading: isLocaleLoading, error: localeError }] = useUpdateProductLocaleMutation()

	const handleSubmit = async ({ id = product.id, name, description, price, image }) => {
		try {
			await Promise.all([
				// базові (нелокалізовані) поля
				updateProduct({ id, data: { price: Number(price), image } }).unwrap(),
				// локалізовані поля для активної мови
				updateLocale({ id, locale, values: { title: name, description: description || '' } }).unwrap(),
			])
			onSuccess?.()
		} catch (e) {
			console.error(e)
		}
	}
	const isSubmitting = isBaseLoading || isLocaleLoading
	const submitError = baseError || localeError
	
	return <ProductForm product={product} locale={locale} onSubmit={handleSubmit} isSubmitting={isSubmitting} submitError={submitError} />
}
