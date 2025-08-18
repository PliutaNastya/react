import LanguageSwitcher from '@/shared/i18n/ui/LanguageSwitcher'
import { MainMenu } from './MainMenu'
import { UserInfo } from './UserInfo'

export default function Header() {
	return (
		<header style={{ display: 'flex', gap: 16, alignItems: 'center', paddingBlock: '20px', flexWrap: 'wrap' }}>
			<MainMenu />
			<UserInfo />
			<LanguageSwitcher />
		</header>
	)
}
