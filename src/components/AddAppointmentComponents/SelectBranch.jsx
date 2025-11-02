import { useEffect, useState } from 'react'
import { Check, MapPin } from 'lucide-react'

function SelectBranch() {
	const [branch, setBranch] = useState([])
	const [selectedBranch, setSelectedBranch] = useState(null)

	// Cargar datos del JSON de forma asíncrona
	useEffect(() => {
		const branchData = async () => {
			try {
				const res = await fetch('/public/data_test/data_sucursal.json')

				if (!res.ok) throw new Error(`Error HTTP: ${res.status}`)

				const data = await res.json()
				setBranch(Array.isArray(data) ? data : data.branch ?? [])
			} catch (err) {
				console.error('Error al cargar sucursales:', err)
			} finally {
				// setLoading(false)
			}
		}
		branchData()
	}, [])

	return (
		<div className="space-y-4">
			<h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center space-x-2">
				<MapPin className="h-5 w-5 text-amber-400" />
				<span>Paso 1: Selecciona una sucursal</span>
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
				{branch.map((branch) => (
					<button
						key={branch.id}
						onClick={() => setSelectedBranch(branch)}
						className={`p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02] ${
							selectedBranch?.id === branch.id
								? 'border-amber-400 bg-slate-800 shadow-lg'
								: 'border-slate-700 hover:border-slate-600 bg-slate-900'
						}`}
					>
						<div className="flex items-start justify-between">
							<div className="flex-1">
								<h4 className="font-semibold text-white">{branch.name}</h4>
								<p className="text-sm text-slate-400 mt-1">{branch.address}</p>
								{branch.phone && (
									<p className="text-xs text-slate-500 mt-2">{branch.phone}</p>
								)}
							</div>
							{selectedBranch?.id === branch.id && (
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

export default SelectBranch
