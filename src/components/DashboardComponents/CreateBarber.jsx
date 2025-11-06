import React, { useState } from 'react'

const CreateBarber = () => {
	// Estado para manejar los datos del formulario
	const [formData, setFormData] = useState({
		nombre: '',
		especialidad: '',
		ocupacion: '',
		puntuacion: '',
		horario: '',
		sucursal: '',
		fotoPerfil: null, // Para manejar el archivo de imagen
	})

	// Estado para manejar los errores de validación
	const [errors, setErrors] = useState({})

	// Manejador genérico de cambios en los inputs
	const handleChange = (e) => {
		const { name, value, type, files } = e.target
		setFormData({
			...formData,
			[name]: type === 'file' ? files[0] : value,
		})
	}

	// Función de validación de campos obligatorios
	const validate = () => {
		const newErrors = {}
		if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio.'
		if (!formData.especialidad)
			newErrors.especialidad = 'La especialidad es obligatoria.'
		if (!formData.horario) newErrors.horario = 'El horario es obligatorio.'
		if (!formData.sucursal) newErrors.sucursal = 'La sucursal es obligatoria.'
		return newErrors
	}

	// Manejador del envío del formulario
	const handleSubmit = (e) => {
		e.preventDefault()
		const validationErrors = validate()
		setErrors(validationErrors)

		if (Object.keys(validationErrors).length === 0) {
			// Aquí manejarías el envío de los datos a un backend
			console.log('Formulario enviado con éxito:', formData)
			alert('Formulario enviado con éxito. Revisa la consola.')
		} else {
			console.error('Errores de validación:', validationErrors)
		}
	}

	return (
		<div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10">
			<h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
				Crear Barbero
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label
						htmlFor="fotoPerfil"
						className="block text-sm font-medium text-gray-700"
					>
						Foto de Perfil (Opcional)
					</label>
					<input
						type="file"
						id="fotoPerfil"
						name="fotoPerfil"
						accept="image/*"
						onChange={handleChange}
						className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
					/>
				</div>

				<div>
					<label
						htmlFor="nombre"
						className="block text-sm font-medium text-gray-700"
					>
						Nombre <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						value={formData.nombre}
						onChange={handleChange}
						required
						className={`mt-1 block w-full p-2 border ${
							errors.nombre ? 'border-red-500' : 'border-gray-300'
						} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
					/>
					{errors.nombre && (
						<p className="mt-1 text-xs text-red-500">{errors.nombre}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="especialidad"
						className="block text-sm font-medium text-gray-700"
					>
						Especialidad <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="especialidad"
						name="especialidad"
						value={formData.especialidad}
						onChange={handleChange}
						required
						className={`mt-1 block w-full p-2 border ${
							errors.especialidad ? 'border-red-500' : 'border-gray-300'
						} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
					/>
					{errors.especialidad && (
						<p className="mt-1 text-xs text-red-500">{errors.especialidad}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="ocupacion"
						className="block text-sm font-medium text-gray-700"
					>
						Ocupación (Opcional)
					</label>
					<input
						type="text"
						id="ocupacion"
						name="ocupacion"
						value={formData.ocupacion}
						onChange={handleChange}
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="puntuacion"
						className="block text-sm font-medium text-gray-700"
					>
						Puntuación (Opcional)
					</label>
					<input
						type="number"
						id="puntuacion"
						name="puntuacion"
						value={formData.puntuacion}
						onChange={handleChange}
						min="0"
						max="5"
						step="0.1"
						placeholder="0.0 a 5.0"
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="horario"
						className="block text-sm font-medium text-gray-700"
					>
						Horario (Ej: 9:00 - 18:00) <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="horario"
						name="horario"
						value={formData.horario}
						onChange={handleChange}
						required
						className={`mt-1 block w-full p-2 border ${
							errors.horario ? 'border-red-500' : 'border-gray-300'
						} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
					/>
					{errors.horario && (
						<p className="mt-1 text-xs text-red-500">{errors.horario}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="sucursal"
						className="block text-sm font-medium text-gray-700"
					>
						Sucursal <span className="text-red-500">*</span>
					</label>
					<select
						id="sucursal"
						name="sucursal"
						value={formData.sucursal}
						onChange={handleChange}
						required
						className={`mt-1 block w-full p-2 border bg-white ${
							errors.sucursal ? 'border-red-500' : 'border-gray-300'
						} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
					>
						<option value="">Selecciona una sucursal</option>
						<option value="principal">Principal</option>
						<option value="norte">Norte</option>
						<option value="sur">Sur</option>
						<option value="este">Este</option>
					</select>
					{errors.sucursal && (
						<p className="mt-1 text-xs text-red-500">{errors.sucursal}</p>
					)}
				</div>

				<button
					type="submit"
					className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
				>
					Guardar Perfil
				</button>
			</form>
		</div>
	)
}

export default CreateBarber
