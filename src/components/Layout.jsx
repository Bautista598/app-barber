import { Link, useLocation } from 'react-router'
import { Scissors, Calendar, List } from 'lucide-react'

export default function Layout({ children }) {
	const location = useLocation()

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
			<header className="bg-slate-950 border-b border-slate-800 shadow-lg">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center justify-between flex-wrap gap-4">
						<Link
							to="/"
							className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
						>
							<div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-2.5 shadow-lg">
								<Scissors className="h-6 w-6 text-slate-900" />
							</div>
							<div>
								<h1 className="text-xl sm:text-2xl font-bold text-white">
									Barbería Dashboard
								</h1>
								<p className="text-slate-400 text-xs sm:text-sm mt-0.5">
									Panel de gestión
								</p>
							</div>
						</Link>

						<div className="flex items-center space-x-2 sm:space-x-3">
							<Link
								to="/agendar-cita"
								className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base ${
									location.pathname === '/agendar-cita'
										? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 shadow-lg'
										: 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700'
								}`}
							>
								<Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
								<span className="hidden sm:inline">Agendar Cita</span>
								<span className="sm:hidden">Agendar</span>
							</Link>

							<Link
								to="/ver-citas"
								className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base ${
									location.pathname === '/ver-citas'
										? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 shadow-lg'
										: 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700'
								}`}
							>
								<List className="h-4 w-4 sm:h-5 sm:w-5" />
								<span className="hidden sm:inline">Ver Citas</span>
								<span className="sm:hidden">Citas</span>
							</Link>
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
				{children}
			</main>
		</div>
	)
}
