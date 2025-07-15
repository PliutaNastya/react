import { RouterProvider } from 'react-router'
import './App.scss'
import router from './routes/routes'
import ThemeProvider from './providers/ThemeProvider'
import TravelProvider from './providers/TravelProvider'

function App() {
	return (
		<ThemeProvider>
			<TravelProvider>
				<RouterProvider router={router} />
			</TravelProvider>
		</ThemeProvider>
	)
}

export default App
