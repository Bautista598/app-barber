import { AlertTriangle, X } from 'lucide-react'

export default function DeleteModalAppointment({
	isOpen,
	onClose,
	onConfirm,
	clienteNombre,
	citaId,
}) {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm animate-in fade-in duration-200">
			<div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border-2 border-red-500 animate-in zoom-in duration-200">
				<div className="bg-linear-to-r from-red-500 to-red-600 px-6 py-4 flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<AlertTriangle className="h-6 w-6 text-white" />
						<h2 className="text-xl font-bold text-white">
							Confirmar Eliminación
						</h2>
					</div>
					<button
						onClick={onClose}
						className="text-white hover:text-slate-200 transition-colors"
					>
						<X className="h-6 w-6" />
					</button>
				</div>

				<div className="p-6 space-y-4">
					<p className="text-slate-300 text-lg">
						¿Estás seguro de que deseas eliminar la cita de{' '}
						<span className="font-bold text-white">{clienteNombre}</span>?
					</p>
					<p className="text-slate-400 text-sm">
						Esta acción no se puede deshacer.
					</p>

					<div className="flex space-x-3 pt-4">
						<button
							onClick={onClose}
							className="flex-1 px-4 py-2.5 border-2 border-slate-700 text-slate-300 rounded-lg font-medium hover:bg-slate-800 transition-colors"
						>
							Cancelar
						</button>
						<button
							onClick={() => onConfirm(citaId)} // Pasar citaId al confirmar
							className="flex-1 px-4 py-2.5 bg-linear-to-r from-red-500 to-red-600 text-white rounded-lg font-bold hover:from-red-600 hover:to-red-700 transition-colors shadow-lg"
						>
							Eliminar Cita
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
