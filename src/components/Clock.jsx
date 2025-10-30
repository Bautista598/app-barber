import { useClock } from '../hooks/useClock'
import { Clock as ClockIcon } from 'lucide-react' // 👈 Importa el ícono correctamente

function Clock() {
	const { formatTime, formatDate } = useClock()

	return (
		<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-slate-700 p-5 sm:p-6 hover:shadow-xl transition-all duration-200 hover:border-amber-400">
			<div className="flex items-center justify-between mb-4">
				<div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-2.5 shadow-lg">
					<ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-900" />{' '}
					{/* ✅ Usa el ícono, no el componente */}
				</div>
			</div>

			<div>
				<p className="text-xs sm:text-sm font-medium text-slate-400 mb-1">
					Hora Actual
				</p>
				<p className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
					{formatTime()}
				</p>
				<p className="text-xs text-slate-500 mt-2 capitalize truncate">
					{formatDate()}
				</p>
			</div>
		</div>
	)
}

export default Clock
