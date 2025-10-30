import { BrowserRouter, Routes, Route } from 'react-router'

import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import SeeQuotes from './pages/SeeQuotes'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/ver-citas" element={<SeeQuotes />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App
