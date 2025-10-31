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

function CardAppointment({ appointment }) {
	if (!appointment) return null

	const { client, barber, service, branch, date_time } = appointment

	return (
		<div className="">
			<div className="bg-slate-900 border-2 border-slate-700 rounded-xl p-4 sm:p-5 hover:border-amber-400 transition-all duration-200 hover:shadow-lg">
				<div className="flex flex-col sm:flex-row items-start gap-4">
					<img
						src={barber.ft_profile}
						alt={typeof barber === 'object' ? barber.name : barber || 'Barbero'}
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
									{client.name || 'Sin nombre'}
								</p>
								<div className="flex items-center space-x-2 text-slate-400 text-xs mt-1">
									<Phone className="h-3 w-3" />
									<span className="truncate">
										{client.phone || 'Sin teléfono'}
									</span>
								</div>
							</div>

							<div>
								<div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
									<ScissorsIcon className="h-3 w-3" />
									<span className="font-medium uppercase">Barbero</span>
								</div>
								<p className="text-white font-semibold text-sm sm:text-base truncate">
									{barber.name || 'Carlos Dundo'}
								</p>
								<div className="flex items-center space-x-2 text-slate-400 text-xs mt-1">
									<span className="truncate">{service.name}</span>
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
									{formatDate(date_time)}
								</p>
							</div>

							<div className="bg-slate-800 rounded-lg p-2">
								<div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
									<Clock className="h-3 w-3" />
									<span className="font-medium">Hora</span>
								</div>
								<p className="text-white font-semibold text-xs">
									{formatTime(
										typeof date_time === 'string'
											? date_time
											: date_time.toISOString()
									)}
								</p>
							</div>

							<div className="bg-slate-800 rounded-lg p-2 col-span-2 sm:col-span-1">
								<div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
									<MapPin className="h-3 w-3" />
									<span className="font-medium">Sucursal</span>
								</div>
								<p className="text-white font-semibold text-xs truncate">
									{branch.name || 'N/A'}
								</p>
							</div>
						</div>
					</div>

					<div className="flex sm:flex-col items-center sm:items-end gap-3 w-full sm:w-auto">
						<div className="flex items-center space-x-1 bg-green-500 bg-opacity-20 px-3 py-2 rounded-lg border border-green-500 flex-1 sm:flex-initial justify-center">
							<DollarSign className="h-4 w-4 text-green-400" />
							<span className="font-bold text-green-400 text-sm sm:text-base">
								{(service.price || 0).toFixed(2)}
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
		</div>
	)
}

export default CardAppointment
