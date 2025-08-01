function SelectField({ field, value, onChange}) {
	return (
		<label>
			<span>{field.title}</span>
			<select name={field.name} value={value} required={field.required} onChange={onChange}>
				<option value="">{field.placeholder}</option>
				{
					field.options.map((option, i) => (
						<option key={i} value={option.id}>{option.label}</option>
					))
				}
			</select>
		</label>
	)
}

export default SelectField

// name: 'doctorId',
// type: 'select',
// placeholder: 'Оберіть лікаря',
// required: true,
// options: doctorOptions,