import TextForm from './FormComponents/TextForm'
import WorkingTime from './FormComponents/WorkingTime'
import SelectedBranchBarber from './FormComponents/SelectedBranchBarber'
import RateBarber from './FormComponents/RateBarber'

import { useState } from 'react'

const CreateBarber = () => {
	const [errors, setErrors] = useState({})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [formData, setFormData] = useState({
		ftProfile: '/src/assets/unknown_profile.jpg',
		name: '',
		occupation: '',
		especially: '',
		rate: 0,
		timeStart: '',
		timeEnd: '',
		selectBranch: '',
	})

	const validateForm = () => {
		let newErrors = {}

		// Validación: Nombre
		if (!formData.name.trim()) {
			newErrors.name = 'El nombre es obligatorio.'
		} else if (formData.name.length < 3) {
			newErrors.name = 'El nombre debe tener al menos 3 caracteres.'
		}

		// Validación: occupation
		if (!formData.occupation.trim()) {
			newErrors.occupation = 'La ocupación es obligatorio.'
		} else if (formData.occupation.length < 3) {
			newErrors.occupation = 'La ocupación debe tener al menos 3 caracteres.'
		}

		// Validación: Especialidad (ej. obligatoria)
		if (!formData.especially.trim()) {
			newErrors.especially = 'La especialidad es obligatorio.'
		} else if (formData.especially.length < 3) {
			newErrors.especially = 'La especialidad debe tener al menos 3 caracteres.'
		}

		if (!formData.timeStart.trim()) {
			newErrors.timeStart = 'seleccione la hora de inicio.'
		} else if (formData.timeStart.length < 4) {
			newErrors.timeStart = 'seleccione la hora de inicio.'
		}

		if (!formData.timeEnd.trim()) {
			newErrors.timeEnd = 'seleccione la hora de fin.'
		} else if (formData.timeEnd.length < 4) {
			newErrors.timeEnd = 'seleccione la hora de fin.'
		}

		setErrors(newErrors)
		// Retorna true si no hay errores, false si hay errores
		return Object.keys(newErrors).length === 0
	}

	const validateSucursal = (value) => {
		let errorMessage = ''

		if (value === '') {
			errorMessage = 'Debe seleccionar una sucursal válida.'
		}

		setErrors((prevErrors) => ({ ...prevErrors, selectBranch: errorMessage }))
		return !errorMessage
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })

		setFormData((prevData) => ({ ...prevData, [name]: value }))

		if (name === 'selectBranch') {
			validateSucursal(value)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSubmitting(true)

		const isValid = validateForm()

		if (isValid) {
			// ✅ Si la validación es exitosa:
			console.log('Datos del Barbero listos para enviar:', formData)
			alert('Barbero creado exitosamente (Simulación de envío)')

			// Aquí se enviaría el fetch/axios a la API
		} else {
			// ❌ Si hay errores:
			console.log('Errores de validación:', errors)
			setIsSubmitting(false)
		}
	}

	return (
		<div className="max-w-xl mx-auto  p-6 rounded-lg mt-10 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
			<h2 className="text-2xl font-bold mb-6 text-white border-b pb-2">
				Crear Barbero
			</h2>
			<form onSubmit={handleSubmit} noValidate className="space-y-4">
				<div>
					<label
						htmlFor="fotoPerfil"
						className="block text-sm font-medium text-white"
					>
						Foto de Perfil (Opcional)
					</label>
					<input
						type="file"
						id="fotoPerfil"
						name="fotoPerfil"
						accept="image/*"
						className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
					/>
				</div>

				<TextForm
					label="Nombre"
					placeholder="Juan Perez"
					handleChange={handleChange}
					name="name"
					error={errors.name}
					value={formData.name}
				/>
				<TextForm
					label="Ocupación"
					placeholder="Barbero"
					handleChange={handleChange}
					name="occupation"
					error={errors.occupation}
					value={formData.occupation}
				/>
				<TextForm
					label="Especialidad"
					placeholder="Cortes clásicos"
					handleChange={handleChange}
					name="especially"
					error={errors.especially}
					value={formData.especially}
				/>

				<RateBarber />

				<div className="">
					<label
						htmlFor="TimeStart"
						className="tracking-widest text-sm font-medium text-white"
					>
						Horario de Trabajo
					</label>
					<div className="flex flex-row w-full justify-between">
						<WorkingTime
							handleChange={handleChange}
							name="timeStart"
							error={errors.timeStart}
							value={formData.timeStart}
						/>

						<WorkingTime
							handleChange={handleChange}
							name="timeEnd"
							error={errors.timeEnd}
							value={formData.timeEnd}
						/>
					</div>
				</div>

				<SelectedBranchBarber
					handleChange={handleChange}
					value={formData.selectBranch}
					error={errors.selectBranch}
				/>

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
				>
					{isSubmitting ? 'Validando...' : 'Crear Barbero'}
				</button>
			</form>
		</div>
	)
}

export default CreateBarber
