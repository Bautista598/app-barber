import { useEffect, useState, useMemo } from 'react'
import {
	Search,
	DollarSign,
	Users,
	Star,
	Clock,
	MapPin,
	UserCog,
} from 'lucide-react'
import React from 'react'
import ModalConfig from './DashboardComponents/ModalConfig'

function BarberTable() {
	const [barberos, setBarberos] = useState([])
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState('')

	const [modalState, setModalState] = useState(false)

	// Cargar datos del JSON de forma asíncrona
	useEffect(() => {
		const loadData = async () => {
			try {
				const res = await fetch('/data_test/data_barber.json')

				if (!res.ok) throw new Error(`Error HTTP: ${res.status}`)

				const data = await res.json()
				setBarberos(Array.isArray(data) ? data : data.barberos ?? [])
			} catch (err) {
				console.error('Error al cargar barberos:', err)
			} finally {
				setLoading(false)
			}
		}
		loadData()
	}, [])

	// Filtrar resultados usando useMemo (para evitar recalcular cada render)
	const filteredBarberos = useMemo(() => {
		const lower = searchTerm.toLowerCase()
		return barberos.filter(
			(barber) =>
				barber.name?.toLowerCase().includes(lower) ||
				barber.occupation?.toLowerCase().includes(lower) ||
				barber.branch?.toLowerCase().includes(lower)
		)
	}, [barberos, searchTerm])

	if (loading)
		return (
			<div className="text-center py-12 text-slate-500">
				Cargando barberos...
			</div>
		)

	return (
		<div className="space-y-6 ">
			{/* Input de búsqueda */}
			<div className="relative">
				<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
					<Search className="h-5 w-5 text-slate-400" />
				</div>
				<input
					type="text"
					placeholder="Buscar por nombre, ocupación o sucursal..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="block w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-400"
				/>
			</div>

			{/* Tabla */}
			<div className="bg-white rounded-xl  shadow-sm border border-slate-200 overflow-hidden">
				<div className="max-h-[480px] overflow-y-auto overflow-x-auto">
					<table className="min-w-full divide-y divide-slate-200">
						<thead className="bg-slate-50">
							<tr>
								<th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
									Barbero
								</th>
								<th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
									Ocupación
								</th>
								<th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
									Ganancia Hoy
								</th>
								<th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
									Clientes
								</th>
								<th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
									Puntuación
								</th>
								<th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
									Horario
								</th>
								<th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
									Sucursal
								</th>
								<th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
									Funciones
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-slate-100">
							{filteredBarberos.length === 0 ? (
								<tr>
									<td
										colSpan={7}
										className="px-6 py-12 text-center text-slate-500"
									>
										<div className="flex flex-col items-center space-y-2">
											<Search className="h-12 w-12 text-slate-300" />
											<p className="text-lg font-medium">
												No se encontraron barberos
											</p>
											<p className="text-sm">
												Intenta con otro término de búsqueda
											</p>
										</div>
									</td>
								</tr>
							) : (
								filteredBarberos.map((barber) => (
									<tr
										key={barber.id}
										className="hover:bg-slate-50 transition-colors duration-150"
									>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center space-x-3">
												<div className="shrink-0">
													<img
														src={
															barber.ft_profile ||
															'https://via.placeholder.com/40'
														}
														alt={barber.name}
														className="h-12 w-12 rounded-full object-cover border-2 border-slate-100"
														loading="lazy"
													/>
												</div>
												<div>
													<div className="text-sm font-medium text-slate-900">
														{barber.name}
													</div>
													<div className="text-xs text-slate-500">
														{barber.specialty || 'Barbero'}
													</div>
												</div>
											</div>
										</td>

										<td className="px-6 py-4 whitespace-nowrap">
											<span className="text-sm text-slate-900">
												{barber.occupation || 'Barbero'}
											</span>
										</td>

										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center space-x-1">
												<DollarSign className="h-4 w-4 text-green-600" />
												<span className="text-sm font-medium text-slate-900">
													{barber.earnings_today?.toFixed(2) || '0.00'}
												</span>
											</div>
										</td>

										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center space-x-2">
												<Users className="h-4 w-4 text-blue-600" />
												<span className="text-sm font-medium text-slate-900">
													{barber.customers_today || 0}
												</span>
											</div>
										</td>

										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center space-x-1">
												<Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
												<span className="text-sm font-medium text-slate-900">
													{barber.rate?.toFixed(1) || '5.0'}
												</span>
											</div>
										</td>

										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center space-x-2">
												<Clock className="h-4 w-4 text-slate-400" />
												<span className="text-sm text-slate-900">
													{barber.start_time.slice(0, 5)} -{' '}
													{barber.end_time.slice(0, 5)}
												</span>
											</div>
										</td>

										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center space-x-2">
												<MapPin className="h-4 w-4 text-slate-400" />
												<span className="text-sm text-slate-900">
													{barber.branch || 'Principal'}
												</span>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div
												className="flex items-center justify-center rounded-xl space-x-2 
               w-12 h-12 text-slate-400 hover:text-black
               hover:transition duration-700 ease-in-out delay-150
               hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-500"
											>
												<UserCog
													className="cursor-pointer hover:text-black "
													onClick={() => setModalState(true)}
												/>

												<ModalConfig
													isOpen={modalState}
													onClose={() => setModalState(false)}
												/>
											</div>
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default React.memo(BarberTable)
