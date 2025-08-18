import { useTranslation } from "react-i18next"

export default function ForbiddenPage() {
	const { t } = useTranslation()

	return <h1>{t('Forbidden.title')}</h1>
}
