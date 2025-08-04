function ProductFilters({searchValue, handleChange}) {
	return (
		<label className="flex flex-col gap-1 text-sm text-gray-700 mb-4">
			<span className="font-medium text-white">Пошук за назвою</span>
			<input
				type="text"
				placeholder="Пошук по назві..."
				value={searchValue}
				onChange={handleChange}
				className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
			/>
		</label>
	)
}

export default ProductFilters