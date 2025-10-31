import { useState, useEffect } from 'react'

import {
	Trash2,
	Edit,
	Calendar,
	Clock,
	User,
	Phone,
	DollarSign,
	Scissors as ScissorsIcon,
	CheckCircle,
	MapPin,
} from 'lucide-react'

const formatDate = (date) => {
	const dateObj = date instanceof Date ? date : new Date(date)
	return dateObj.toLocaleDateString('es-ES', {
		weekday: 'short',
		day: '2-digit',
		month: 'short',
	})
}

const formatTime = (dateString) => {
	const date = new Date(dateString)
	return date.toLocaleTimeString('es-ES', {
		hour: '2-digit',
		minute: '2-digit',
	})
}

function SeeQuotes() {
	const [appointments, setAppointments] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadData = async () => {
			try {
				// Intentar obtener los datos
				const res = await fetch('/public/data_test/data_appointments.json')

				// Verificar si la respuesta fue exitosa
				if (!res.ok) throw new Error(`Error HTTP: ${res.status}`)

				const data = await res.json()

				// Verificar que los datos sean un array o contengan "barberos"
				setAppointments(Array.isArray(data) ? data : data.barber ?? [])
			} catch (error) {
				console.error('Error al cargar barberos:', error)
			} finally {
				setLoading(false)
			}
		}

		loadData()
	}, [])

	if (loading) {
		return (
			<div className="flex items-center justify-center h-96">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div>
			</div>
		)
	}

	return (
		<div>
			{appointments.length === 0 ? (
				<div className="text-center py-12">
					<Calendar className="h-16 w-16 text-slate-600 mx-auto mb-4" />
					<p className="text-lg font-medium text-slate-400">
						No hay citas agendadas
					</p>
					<p className="text-sm text-slate-500 mt-1">
						Las nuevas citas aparecerán aquí
					</p>
				</div>
			) : (
				<div className="space-y-3 sm:space-y-4">
					{appointments.map((cita) => (
						<div
							key={cita.id}
							className="bg-slate-900 border-2 border-slate-700 rounded-xl p-4 sm:p-5 hover:border-amber-400 transition-all duration-200 hover:shadow-lg"
						>
							<div className="flex flex-col sm:flex-row items-start gap-4">
								<img
									src={cita.barber.ft_profile}
									alt={cita.barber.name}
									className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-amber-400 shrink-0"
								/>

								<div className="flex-1 w-full min-w-0 space-y-3">
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
										<div>
											<div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
												<User className="h-3 w-3" />
												<span className="font-medium uppercase">Cliente</span>
											</div>
											<p className="text-white font-semibold text-sm sm:text-base truncate">
												{cita.client.name || 'Sin nombre'}
											</p>
											<div className="flex items-center space-x-2 text-slate-400 text-xs mt-1">
												<Phone className="h-3 w-3" />
												<span className="truncate">
													{cita.client.phone || 'Sin teléfono'}
												</span>
											</div>
										</div>

										<div>
											<div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
												<ScissorsIcon className="h-3 w-3" />
												<span className="font-medium uppercase">Barbero</span>
											</div>
											<p className="text-white font-semibold text-sm sm:text-base truncate">
												{cita.barber.name || 'Carlos Dundo'}
											</p>
											<div className="flex items-center space-x-2 text-slate-400 text-xs mt-1">
												<span className="truncate">{cita.service.name}</span>
											</div>
										</div>
									</div>

									<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
										<div className="bg-slate-800 rounded-lg p-2">
											<div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
												<Calendar className="h-3 w-3" />
												<span className="font-medium">Fecha</span>
											</div>
											<p className="text-white font-semibold text-xs capitalize">
												{formatDate(cita.date_time)}
											</p>
										</div>

										<div className="bg-slate-800 rounded-lg p-2">
											<div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
												<Clock className="h-3 w-3" />
												<span className="font-medium">Hora</span>
											</div>
											<p className="text-white font-semibold text-xs">
												{formatTime(
													typeof cita.date_time === 'string'
														? cita.date_time
														: cita.date_time.toISOString()
												)}
											</p>
										</div>

										<div className="bg-slate-800 rounded-lg p-2 col-span-2 sm:col-span-1">
											<div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
												<MapPin className="h-3 w-3" />
												<span className="font-medium">Sucursal</span>
											</div>
											<p className="text-white font-semibold text-xs truncate">
												{cita.branch.name || 'N/A'}
											</p>
										</div>
									</div>
								</div>

								<div className="flex sm:flex-col items-center sm:items-end gap-3 w-full sm:w-auto">
									<div className="flex items-center space-x-1 bg-green-500 bg-opacity-20 px-3 py-2 rounded-lg border border-green-500 flex-1 sm:flex-initial justify-center">
										<DollarSign className="h-4 w-4 text-green-400" />
										<span className="font-bold text-green-400 text-sm sm:text-base">
											{(cita.service.price || 0).toFixed(2)}
										</span>
									</div>

									<div className="flex space-x-2">
										<button
											className="p-2 border-2 border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-slate-900 transition-all"
											title="Reprogramar"
										>
											<Edit className="h-4 w-4" />
										</button>
										<button
											className="p-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
											title="Eliminar"
										>
											<Trash2 className="h-4 w-4" />
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default SeeQuotes
