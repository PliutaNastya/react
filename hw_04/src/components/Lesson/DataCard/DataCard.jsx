import styles from './DataCard.module.css'

function DataCard({ logo, badgeText, title, children, footer }) {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div>
					<img src={logo} alt="logo" className={styles.logo} />
				</div>
				<div>{badgeText}</div>
			</div>

			{children}

			{footer || <div>{title}</div>}
		</div>
	)
}

export default DataCard
