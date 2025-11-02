import { useState } from 'react'

// Importación de los componentes de cada paso para agendar una cita
import SelectBranch from '../components/AddAppointmentComponents/SelectBranch'

function AddAppointment() {
	const [step, setStep] = useState(1)
	const [loading, setLoading] = useState(true)
	const [selectedBranch, setSelectedBranch] = useState(null)

	const handleBack = () => {
		if (step > 1) setStep(step - 1)
		console.log('volver al paso anterior')
	}
	const handleNext = () => {
		if (step < 4) setStep(step + 1)
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
			{step === 1 && (
				<SelectBranch
					selectedBranch={selectedBranch}
					setSelectedBranch={setSelectedBranch}
				/>
			)}

			{step === 2 && (
				<div>
					<span>Paso 2</span>
				</div>
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
						(step === 2 && !selectedBranch) ||
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
