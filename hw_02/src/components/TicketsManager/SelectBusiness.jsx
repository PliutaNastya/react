function SelectBusiness({onChange}) {
	
	return (
		<>
			<label htmlFor="drink">Оберіть, що бажаєте замовити</label>
			<select name="drink" id="drink" onChange={(e) => onChange(e.target.value)}>
				<option value="">-- Оберіть --</option>
				<option value="newspaper">Газета</option>
				<option value="brandy">Коньяк</option>
			</select>
		</>
	)
}

export default SelectBusiness
