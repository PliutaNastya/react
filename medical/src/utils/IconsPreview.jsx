import Icon from "../components/Icon" 

const icons = [
	'home-icon',
	'patient-icon',
	'doctor-icon',
	'appointments-icon',
]

const IconsPreview = () => {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
			{icons.map(name => (
				<div key={name} style={{ textAlign: 'center' }}>
					<Icon name={name} size={40} color="currentColor" />
					<div style={{ marginTop: '5px', fontSize: '12px' }}>{name}</div>
				</div>
			))}
		</div>
	)
}

export default IconsPreview