import './App.scss'
import { useState } from 'react'
import MenuList from './components/MenuList'
import CardsList from './components/Google/CardsList'
import { favoriteSources } from './data/1_data_google_favorite'
import Converter from './components/Converter/Converter'
import TasksDivider from './components/TasksDivider/TasksDivider'

function App() {
	const [activeTask, setActiveTask] = useState(1)

	return (
		<>
			<header className="header">
				<MenuList onSelect={setActiveTask} />
			</header>
			<main>
				{activeTask === 1 && <CardsList sourceList={favoriteSources} />}
				{activeTask === 2 && <Converter />}
				{activeTask === 3 && <TasksDivider />}
			</main>
		</>
	)
}

export default App
