import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ProductForm({ product = {}, locale = { locale }, onSubmit, isSubmitting, submitError }) {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState(0)
	const [image, setImage] = useState('')
	const { t } = useTranslation()

	useEffect(() => {
    setName(product?.i18n?.[locale]?.title ?? '')
    setDescription(product?.i18n?.[locale]?.description ?? '')
    setPrice(product?.price ?? 0)
    setImage(product?.image ?? '')
  }, [product?.id, locale])

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit({
			...product,
			name,
			price: Number(price),
			image,
			description
		})
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md mx-auto">
			<input
				className="border rounded px-2 py-1"
				placeholder={t('inputs.prodName')}
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
				disabled={isSubmitting}
			/>
			<input
				className="border rounded px-2 py-1"
				placeholder={t('inputs.price')}
				type="number"
				value={price}
				onChange={(e) => setPrice(e.target.value)}
				required
				disabled={isSubmitting}
			/>
			<input
				value={image}
				onChange={(e) => setImage(e.target.value)}
				placeholder={t('inputs.imageUrl')}
				type="url"
				className="border rounded px-2 py-1"
				disabled={isSubmitting}
			/>
			<textarea
				className="border rounded px-2 py-1 min-h-24"
				placeholder={t('inputs.description')}
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				disabled={isSubmitting}
			/>
			<button
				type="submit"
				className="bg-blue-600 text-white rounded px-4 py-2 mt-2 disabled:opacity-60"
				disabled={isSubmitting}
			>
				{isSubmitting ? t('buttons.addProcessing', 'Збереження...') : t('buttons.save')}
			</button>

			{submitError && (
				<div className="text-red-600 text-sm mt-1">
					{submitError?.data?.message || t('common.errorMessage')}
				</div>
			)}
		</form>
	)
}
