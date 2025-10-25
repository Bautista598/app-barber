import StatsCards from '../components/StatsCards'
import BarberTable from '../components/BarberTable'

function Dashboard() {
	return (
		<>
			<div className="min-h-screen ">
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="mb-8">
						<StatsCards />
					</div>

					<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
						<div className="mb-6">
							<h2 className="text-2xl font-bold text-slate-900">Barberos</h2>
							<p className="text-slate-600 mt-1">
								Gestiona y consulta el rendimiento de todos los barberos
							</p>
						</div>
						<BarberTable />
					</div>
				</main>
			</div>
		</>
	)
}

export default Dashboard
