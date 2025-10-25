import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import SeeQuotes from './pages/SeeQuotes'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" index element={<Dashboard />} />
					<Route path="/ver-citas" index element={<SeeQuotes />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App
