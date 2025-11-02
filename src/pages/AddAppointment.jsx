import { useState } from 'react'

// Importación de los componentes de cada paso para agendar una cita
import SelectBranch from '../components/AddAppointmentComponents/SelectBranch'

function AddAppointment() {
	const [loading, setLoading] = useState(true)

	if (!loading) {
		return (
			<div className="flex items-center justify-center h-96">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div>
			</div>
		)
	}

	return (
		<div>
			<h1 className="text-xl text-white">
				Aquí irán los componente de los 4 pasos y la lógica para agendar la cita
			</h1>
			<SelectBranch />
		</div>
	)
}

export default AddAppointment
