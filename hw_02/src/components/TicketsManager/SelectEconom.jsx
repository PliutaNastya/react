function SelectEconom({ onBlur }) {
	
	const handleChange = (e) => {
		const selectedOpts = [...e.target.selectedOptions].map(option => option.value)
		onBlur(selectedOpts)
	}
	
	return (
		<>
			<label htmlFor="econom-choice">Оберіть, що бажаєте замовити. Дозволено обрати більше однієї опції.</label>
			<select name="econom-choice" id="econom-choice" multiple onBlur={handleChange}>
				<option value="">-- Оберіть --</option>
				<option value="guiness">Пиво "Guiness"</option>
				<option value="ipa">Пиво "Ipa"</option>
				<option value="chips">Чипси</option>
			</select>
		</>
	)
}

export default SelectEconom
