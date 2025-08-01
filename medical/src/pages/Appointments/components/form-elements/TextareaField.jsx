function TextareaField({field, value, onChange}) {
	return (
		<label>
			<span>{field.title}</span>
			<textarea name={field.name} required={field.required} placeholder={field.placeholder} value={value} onChange={onChange}></textarea>
		</label>
	)
}

export default TextareaField

// name: 'reason',
// type: 'textarea',
// required: true,
// placeholder: 'Опишіть скарги або мету візиту',