import { RouterProvider } from 'react-router'
import './App.scss'
import router from './routes'
import ThemeProvider from './providers/ThemeProvider'

function App() {
	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
