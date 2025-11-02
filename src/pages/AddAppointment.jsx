import { useState } from 'react'

// Importación de los componentes de cada paso para agendar una cita
import SelectBranch from '../components/AddAppointmentComponents/SelectBranch'
import SelectService from '../components/AddAppointmentComponents/SelectService'

function AddAppointment() {
	const [step, setStep] = useState(1)
	const [loading, setLoading] = useState(true)

	// Estados para los componentes
	const [selectedBranch, setSelectedBranch] = useState(null)
	const [selectedService, setSelectedService] = useState(null)

	const handleBack = () => {
		if (step > 1) setStep(step - 1)
		console.log('volver al paso anterior')
	}
	const handleNext = () => {
		if (step === 1 && SelectBranch) setStep(2)
		else if (step === 2 && SelectService) setStep(3)
		else if (step === 3 && selectedBarbero) setStep(4)

		console.log('siguiente paso')
	}

	if (!loading) {
		return (
			<div className="flex items-center justify-center h-96">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div>
			</div>
		)
	}

	return (
		<div>
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
				<div className="absolute top-20 right-10 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
				<div className="absolute bottom-10 left-20 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
				<div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
			</div>

			{step === 1 && (
				<SelectBranch
					selectedBranch={selectedBranch}
					setSelectedBranch={setSelectedBranch}
				/>
			)}

			{step === 2 && (
				<SelectService
					selectedService={selectedService}
					setSelectedService={setSelectedService}
				/>
			)}

			{step === 3 && (
				<div>
					<span>Paso 3</span>
				</div>
			)}

			{step === 4 && (
				<div>
					<span>Paso 4</span>
				</div>
			)}

			<div className="flex items-center justify-between mt-6 sm:mt-8 pt-6 border-t border-slate-700">
				<button
					onClick={handleBack}
					disabled={step === 1}
					className="px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-slate-700 text-slate-300 rounded-lg font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
				>
					Atrás
				</button>

				<button
					onClick={handleNext}
					disabled={
						(step === 1 && !selectedBranch) ||
						(step === 2 && !selectedService) ||
						(step === 3 && !selectedBranch) ||
						(step === 4 && (!selectedBranch || !selectedBranch))
					}
					className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 rounded-lg font-bold hover:from-amber-500 hover:to-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm sm:text-base"
				>
					{step === 4 ? 'Continuar' : 'Siguiente'}
				</button>
			</div>
		</div>
	)
}

export default AddAppointment
