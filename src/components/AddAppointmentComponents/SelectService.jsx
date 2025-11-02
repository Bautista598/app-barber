import { useEffect, useState } from 'react'

import { Check, ScissorsIcon } from 'lucide-react'

function SelectService({ selectedService, setSelectedService }) {
	const [services, setServices] = useState([])

	// Cargar datos del JSON de forma asíncrona
	useEffect(() => {
		const serviceData = async () => {
			try {
				const res = await fetch('/public/data_test/data_service.json')

				if (!res.ok) throw new Error(`Error HTTP: ${res.status}`)

				const data = await res.json()
				setServices(Array.isArray(data) ? data : data.service ?? [])
			} catch (err) {
				console.error('Error al cargar sucursales:', err)
			} finally {
				// setLoading(false)
			}
		}
		serviceData()
	}, [])

	return (
		<div className="space-y-4">
			<h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center space-x-2">
				<ScissorsIcon className="h-5 w-5 text-amber-400" />
				<span>Paso 2: Selecciona un servicio</span>
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-h-[400px] overflow-y-auto">
				{services.map((service) => (
					<button
						key={service.id}
						onClick={() => setSelectedService(service)}
						className={`p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02] ${
							selectedService?.id === service.id
								? 'border-amber-400 bg-slate-800 shadow-lg'
								: 'border-slate-700 hover:border-slate-600 bg-slate-900'
						}`}
					>
						<div className="flex items-start justify-between">
							<div className="flex-1">
								<h4 className="font-semibold text-white">{service.name}</h4>
								{service.description && (
									<p className="text-sm text-slate-400 mt-1">
										{service.description}
									</p>
								)}
								<div className="flex items-center space-x-3 mt-3 text-sm">
									<span className="font-medium text-green-400">
										${service.price.toFixed(2)}
									</span>
									<span className="text-slate-500">•</span>
									<span className="text-slate-400">
										{service.duration_minuts} min
									</span>
								</div>
							</div>
							{selectedService?.id === service.id && (
								<div className="ml-3 bg-amber-400 rounded-full p-1">
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

export default SelectService
