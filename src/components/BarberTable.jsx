import dataBarber from '../data_test/data_barber.json'
import { Search, DollarSign, Users, Star, Clock, MapPin } from 'lucide-react'

// Use the JSON data as the initial list for the table (adjust path if needed)
const filteredBarberos = Array.isArray(dataBarber)
	? dataBarber
	: dataBarber?.barberos ?? []

export default function BarberTable() {
	return (
		// Input de búsqueda
		<div className="space-y-6">
			<div className="relative">
				<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
					<Search className="h-5 w-5 text-slate-400" />
				</div>
				{/* TODO: realizar la función para que filtre barberos */}
				<input
					type="text"
					placeholder="Buscar por nombre, ocupación o sucursal..."
					className="block w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-400"
				/>
			</div>
			{/*TODO: Renderizar los barberos de la base de datos*/}
			<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
				<div className="overflow-x-auto">
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
													{barber.start_time} - {barber.time_end}
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
