import CreateBarber from './CreateBarber'
import EditBarber from './EditBarber'
import DeleteBarber from './DeleteBarber'

function ModalConfig({ isOpen, onClose }) {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-500/10  bg-opacity-5 backdrop-blur-sm animate-in fade-in duration-200">
			{/* Contenedor de la modal */}
			<div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
				{/* Botón cerrar */}
				<button
					type="button"
					onClick={onClose}
					className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
				>
					✕
				</button>
				<h2 className="text-xl font-semibold mb-2">Configuración ⚙️</h2>
				<CreateBarber />
				<EditBarber />
				<DeleteBarber />
			</div>
		</div>
	)
}

export default ModalConfig
