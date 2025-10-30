import { Cloud } from 'lucide-react'
import { useWeather } from '../hooks/useWeather'

function Weather() {
	const { weather, loading } = useWeather()

	return (
		<div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-slate-700 p-5 sm:p-6 hover:shadow-xl transition-all duration-200 hover:border-amber-400">
			<div className="flex items-center justify-between mb-4">
				<div className="bg-linear-to-br from-sky-400 to-sky-500 rounded-xl p-2.5 shadow-lg">
					<Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-slate-900" />
				</div>
			</div>
			<div>
				<p className="text-xs sm:text-sm font-medium text-slate-400 mb-1">
					Clima
				</p>
				{loading ? (
					<div className="flex items-center space-x-2">
						<div className="animate-pulse bg-slate-700 h-8 w-20 rounded"></div>
					</div>
				) : weather ? (
					<>
						<div className="flex items-center space-x-2">
							<span className="text-2xl sm:text-3xl">{weather.icon}</span>
							<p className="text-2xl sm:text-3xl font-bold text-white">
								{weather.temperature}°C
							</p>
						</div>
						<p className="text-xs text-slate-500 mt-2 truncate">
							{weather.condition} - {weather.location}
						</p>
					</>
				) : (
					<p className="text-sm text-slate-500">No disponible</p>
				)}
			</div>
		</div>
	)
}

export default Weather
