import './App.scss'
import { useState } from 'react'
import MenuList from './components/MenuList'
import LoginManager from './components/LoginManager'
import Translator from './components/Translator'
import List from './components/List'
import DataArray from './components/DataArray'
import TicketsManager from './components/TicketsManager/TicketsManager'
import KitchenOrdersManager from './components/KitchenOrdersManager/KitchenOrdersManager'

function App() {
	const [activeTask, setActiveTask] = useState(1)

	return (
		<>
			<header className="header">
				<MenuList onSelect={setActiveTask} />
			</header>
			<main>
				{activeTask === 1 && <LoginManager />}
				{activeTask === 2 && <TicketsManager />}
				{activeTask === 3 && <Translator />}
				{activeTask === 4 && <List />}
				{activeTask === 5 && <DataArray />}
				{activeTask === 6 && <KitchenOrdersManager />}
			</main>
		</>
	)
}

export default App
