import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" index element={<Dashboard />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App
