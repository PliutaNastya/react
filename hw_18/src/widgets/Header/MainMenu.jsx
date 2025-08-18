import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth/api/authSlice'
import { Link } from 'react-router'
import { getPagesObjectList } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'

export function MainMenu() {
	const user = useSelector(selectAuthUser)
	const { t } = useTranslation()

  // Фільтруємо маршрути, які потрібно показати в меню (ті, що мають title)
  // І враховуємо requireAuth і ролі

  const allowedRoutes = getPagesObjectList().filter(({ meta }) => {
    if (!meta.isInMenu) return false
    if (!meta.requireAuth) return true
    if (!user) return false
    if (!meta.roles) return true
    return meta?.roles.includes(user?.role)
  })

  return (
    <nav>
      {allowedRoutes.map(({ path, meta }) => (
        <Link key={path} to={path} style={{ margin: '0 10px' }}>
				<span>{t(`${meta.title}.menuLabel`)}</span>
        </Link>
      ))}
    </nav>
  )
}
