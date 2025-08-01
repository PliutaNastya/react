function InputField({ field, value, onChange}) {
	return (
		<label>
			<span>{field.title}</span>
			<input type={field.type} value={value} name={field.name} placeholder={field.placeholder} required={field.required} onChange={onChange} />
		</label>
	)
}

export default InputField
