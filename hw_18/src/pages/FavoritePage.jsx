import FavoriteList from "@/widgets/FavoriteList";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function FavoritePage() {
	const user = useSelector((state) => state.auth.user)
	const { t } = useTranslation()

	if (!user) return <div>{t('Favorites.permission')}</div>

	return (
		<div>
			<h1>{t('Favorites.title')}</h1>
			<FavoriteList userId={user.id} />
		</div>
	)
}

export default FavoritePage;