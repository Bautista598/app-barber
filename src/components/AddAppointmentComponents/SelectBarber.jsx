import { useEffect, useState } from 'react'
import { MapPin, Check } from 'lucide-react'

function SelectBarber({ selectedBarber, setSelectedBarber }) {
	const [barbers, setBarbers] = useState([])

	// Cargar datos del JSON de forma asíncrona
	useEffect(() => {
		const barberData = async () => {
			try {
				const res = await fetch('/public/data_test/data_barber.json')

				if (!res.ok) throw new Error(`Error HTTP: ${res.status}`)

				const data = await res.json()
				setBarbers(Array.isArray(data) ? data : data.barber ?? [])
			} catch (err) {
				console.error('Error al cargar sucursales:', err)
			} finally {
				// setLoading(false)
			}
		}
		barberData()
	}, [])

	return (
		<div className="space-y-4">
			<h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
				Paso 3: Selecciona un barbero
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-h-[400px] overflow-y-auto">
				{barbers.map((barber) => (
					<button
						key={barbers.id}
						onClick={() => setSelectedBarber(barber)}
						className={`p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02] ${
							selectedBarber?.id === barber.id
								? 'border-amber-400 bg-slate-800 shadow-lg'
								: 'border-slate-700 hover:border-slate-600 bg-slate-900'
						}`}
					>
						<div className="flex items-start space-x-4">
							<img
								src={barbers.ft_profile || 'https://via.placeholder.com/60'}
								alt={barbers.name}
								className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-amber-400"
							/>
							<div className="flex-1 min-w-0">
								<h4 className="font-semibold text-white">{barber.name}</h4>
								<p className="text-sm text-slate-400 mt-1 truncate">
									{barber.specialty || barber.occupation}
								</p>
								<div className="flex items-center space-x-2 mt-2 text-xs text-slate-500">
									<MapPin className="h-3 w-3" />
									<span>{barber.branch}</span>
								</div>
							</div>
							{selectedBarber?.id === barber.id && (
								<div className="bg-amber-400 rounded-full p-1 shrink-0">
									<Check className="h-4 w-4 text-slate-900" />
								</div>
							)}
						</div>
					</button>
				))}
			</div>
		</div>
	)
}

export default SelectBarber
