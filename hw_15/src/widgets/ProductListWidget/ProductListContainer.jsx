import { useGetProductsQuery } from "@/entities/product"
import { useEffect, useState } from "react"
import { ProductList } from "./ProductList"
import useProductFilters from "@/features/product/filter-product/model/useProductFilters"

function ProductListContainer() {
	const [page, setPage] = useState(1)
	const [cursors, setCursors] = useState([])
	const perPage = 6

	const {searchValue, handleChange} = useProductFilters()

	// Логіка запиту даних
	const { data, isLoading } = useGetProductsQuery({ page, perPage, cursors, searchValue })
	const products = data?.data || []
	const hasMore = data?.hasMore

	// Логіка для курсорів та зменшення сторінки при порожньому результаті
	useEffect(() => {
		if (data?.cursor && cursors.length < page) {
			setCursors((prev) => [...prev, data.cursor])
		}
		if (data?.data.length === 0 && page > 1) {
			setPage((p) => p - 1)
		}
	}, [data, cursors?.length, page])

	return (
		<div>
			<ProductList products={products} page={page} setPage={setPage} hasMore={hasMore} isLoading={isLoading} searchValue={searchValue} handleChange={handleChange} />
		</div>
	)
}

export default ProductListContainer