import { useState, useEffect } from 'react'
import { X, Calendar, Clock } from 'lucide-react'

export default function EditModalAppointment({
	isOpen,
	onClose,
	onSave,
	fechaActual,
	horaActual,
}) {
	const [fecha, setFecha] = useState('')
	const [hora, setHora] = useState('')

	useEffect(() => {
		if (isOpen) {
			setFecha(fechaActual)
			setHora(horaActual)
		}
	}, [isOpen, fechaActual, horaActual])

	const getTodayDate = () => {
		const today = new Date()
		return today.toISOString().split('T')[0]
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (fecha && hora) {
			onSave(fecha, hora)
		}
	}

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm animate-in fade-in duration-200">
			<div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border-2 border-amber-400 animate-in zoom-in duration-200">
				<div className="bg-linear-to-r from-amber-400 to-orange-500 px-6 py-4 flex items-center justify-between">
					<h2 className="text-xl font-bold text-slate-900">Reprogramar Cita</h2>
					<button
						onClick={onClose}
						className="text-slate-900 hover:text-slate-700 transition-colors"
					>
						<X className="h-6 w-6" />
					</button>
				</div>

				<form onSubmit={handleSubmit} className="p-6 space-y-4">
					<div>
						<label className="text-sm font-medium text-slate-300 mb-2 flex items-center space-x-2">
							<Calendar className="h-4 w-4 text-amber-400" />
							<span>Nueva Fecha</span>
						</label>
						<input
							type="date"
							value={fecha}
							onChange={(e) => setFecha(e.target.value)}
							min={getTodayDate()}
							className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
						/>
					</div>

					<div>
						<label className="text-sm font-medium text-slate-300 mb-2 flex items-center space-x-2">
							<Clock className="h-4 w-4 text-amber-400" />
							<span>Nueva Hora</span>
						</label>
						<input
							type="time"
							value={hora}
							onChange={(e) => setHora(e.target.value)}
							className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
						/>
					</div>

					<div className="flex space-x-3 pt-4">
						<button
							type="button"
							onClick={onClose}
							className="flex-1 px-4 py-2.5 border-2 border-slate-700 text-slate-300 rounded-lg font-medium hover:bg-slate-800 transition-colors"
						>
							Cancelar
						</button>
						<button
							type="submit"
							className="flex-1 px-4 py-2.5 bg-linear-to-r from-amber-400 to-orange-500 text-slate-900 rounded-lg font-bold hover:from-amber-500 hover:to-orange-600 transition-colors shadow-lg"
						>
							Guardar Cambios
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
