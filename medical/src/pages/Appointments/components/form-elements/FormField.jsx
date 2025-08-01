import InputField from "./InputField"
import SelectField from "./SelectField"
import TextareaField from "./TextareaField"

function FormField({ field, value, onChange }) {
	if (field.fieldType === 'select') return <SelectField field={field} value={value} onChange={onChange} />
	if (field.fieldType === 'textarea') return <TextareaField field={field} value={value} onChange={onChange} />
	return <InputField field={field} value={value} onChange={onChange} />
}

export default FormField