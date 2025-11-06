import CreateBarber from './CreateBarber'
import EditBarber from './EditBarber'
import DeleteBarber from './DeleteBarber'

function ModalConfig({ isOpen, onClose }) {
	if (!isOpen) return null

	return (
		<section className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-800/10  bg-opacity-5 backdrop-blur-sm animate-in fade-in duration-200">
			<div className=" rounded-2xl shadow-xl bg-gray-500/10 w-full max-w-md p-6 relative">
				<div className="flex justify-between items-center">
					<h1 className="text-2xl text-white font-semibold mb-2">
						Configuración ⚙️
					</h1>
					<button
						type="button"
						onClick={onClose}
						className=" text-gray-500 hover:text-gray-700"
					>
						✕
					</button>
				</div>
				<CreateBarber />
			</div>
		</section>
	)
}

export default ModalConfig
