function SelectBusiness2({onChange}) {
	
	return (
		<>
			<label htmlFor="snack">Чи бажаєте закусити?</label>
			<select name="snack" id="snack" onChange={(e) => onChange(e.target.value)}>
				<option value="">-- Оберіть --</option>
				<option value="yes">Так</option>
				<option value="no">Ні</option>
			</select>
		</>
	)
}

export default SelectBusiness2