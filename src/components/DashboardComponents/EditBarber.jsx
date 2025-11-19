import { useState, useEffect } from 'react'

import TextForm from './FormComponents/TextForm'
import WorkingTime from './FormComponents/WorkingTime'
import RateBarber from './FormComponents/RateBarber'
import SelectedBranchBarber from './FormComponents/SelectedBranchBarber'

import { validateForm } from '../../VerificationLogic/VerificationCreateBarber'

function EditBarber({ barberID }) {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const [errors, setErrors] = useState({})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const [formData, setFormData] = useState({
		ftProfile: '/src/assets/unknown_profile.jpg',
		name: '',
		occupation: '',
		specialty: '',
		rate: 0,
		timeStart: '',
		timeEnd: '',
		selectBranch: '',
	})

	const validateSucursal = (value) => {
		let errorMessage = ''

		if (value === '') {
			errorMessage = 'Debe seleccionar una sucursal válida.'
		}

		setErrors((prevErrors) => ({ ...prevErrors, selectBranch: errorMessage }))
		return !errorMessage
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSubmitting(true)
		// Aquí iría la lógica de envío (PUT/PATCH) de barberData

		const isValid = validateForm(formData, setErrors)

		if (isValid) {
			// ✅ Si la validación es exitosa:
			console.log('Datos del Barbero listos para actualizar:', formData)
			alert('Barbero editado exitosamente (Simulación de envío)')

			// Aquí se enviaría el fetch/axios a la API
		} else {
			// ❌ Si hay errores:
			console.log('Errores de validación:', errors)
			setIsSubmitting(false)
		}
	}

	// Función para manejar cambios en los campos del formulario (DESCOMENTADA y necesaria)
	const handleChange = (e) => {
		const { name, value } = e.target

		setFormData((prevData) => ({ ...prevData, [name]: value }))

		if (name === 'selectBranch') {
			validateSucursal(value)
		}
	}

	// Cargar y filtrar datos del JSON
	useEffect(() => {
		// 🛑 PREVENCIÓN: No intentar cargar si no hay ID válido
		if (!barberID) {
			setLoading(false)
			setFormData({})
			return
		}

		const loadData = async () => {
			setLoading(true)
			setError(null)
			try {
				// 1. Fetch de todos los datos del JSON local
				const res = await fetch('/public/data_test/data_barber.json')

				if (!res.ok) throw new Error(`Error HTTP: ${res.status}`)

				const allData = await res.json()

				// 2. BUSCAR el barbero que coincide con el ID recibido (Lógica Corregida)
				const selectedBarber = allData.find(
					// Comparamos el ID de cada barbero con la prop barberID, asegurando que los tipos coincidan
					(barber) => String(barber.id) === String(barberID)
				)

				if (selectedBarber) {
					// 💡 Guardamos el OBJETO barbero encontrado
					setFormData(selectedBarber)
				} else {
					setError(`Barbero con ID ${barberID} no encontrado.`)
					setFormData({})
				}
			} catch (err) {
				console.error('Error al cargar barberos:', err)
				setError('Error al conectar con la fuente de datos.')
			} finally {
				setLoading(false)
			}
		}

		loadData()
	}, [barberID]) // Dependencia Correcta

	if (loading)
		return (
			<div className="text-center py-12 text-slate-500">Cargando Datos...</div>
		)

	if (error)
		return <div className="text-center py-12 text-red-500">Error: {error}</div>

	// Si no hay barbero (por error o ID faltante) y no está cargando:
	if (!formData || Object.keys(formData).length === 0)
		return (
			<div className="text-center py-12 text-slate-500">
				{barberID
					? `Barbero ID ${barberID} no encontrado.`
					: 'Seleccione un barbero para editar.'}
			</div>
		)

	return (
		<div className="max-w-xl mx-auto p-6 rounded-lg mt-10 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
			<h2 className="text-2xl font-bold mb-6 text-white border-b pb-2">
				Editar barbero - {formData.name} ({barberID})
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
					onChange={handleChange}
					name="name"
					error={errors.name}
					value={formData.name}
				/>
				<TextForm
					label="Ocupación"
					placeholder="Barbero"
					onChange={handleChange}
					name="occupation"
					error={errors.occupation}
					value={formData.occupation}
				/>
				<TextForm
					label="Especialidad"
					placeholder="Cortes clásicos"
					onChange={handleChange}
					name="specialty"
					error={errors.specialty}
					value={formData.specialty}
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
					{isSubmitting ? 'Validando...' : 'Editar Barbero'}
				</button>
			</form>
		</div>
	)
}

export default EditBarber
