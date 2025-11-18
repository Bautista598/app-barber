import { useState, useEffect } from 'react'

function EditBarber({ barberID }) {
	// Usamos 'formData' o 'currentBarber' para el objeto individual.
	const [barberData, setBarberData] = useState({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		// Aquí iría la lógica de envío (PUT/PATCH) de barberData
		console.log('Datos a enviar:', barberData)
	}

	// Función para manejar cambios en los campos del formulario (DESCOMENTADA y necesaria)
	const handleChange = (e) => {
		const { name, value } = e.target
		setBarberData((prevData) => ({ ...prevData, [name]: value }))
	}

	// Cargar y filtrar datos del JSON
	useEffect(() => {
		// 🛑 PREVENCIÓN: No intentar cargar si no hay ID válido
		if (!barberID) {
			setLoading(false)
			setBarberData({})
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
					setBarberData(selectedBarber)
				} else {
					setError(`Barbero con ID ${barberID} no encontrado.`)
					setBarberData({})
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
	if (!barberData || Object.keys(barberData).length === 0)
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
				Editar barbero - {barberData.name} ({barberID})
			</h2>
			<form onSubmit={handleSubmit} noValidate className="space-y-4">
				{/* Debes reintroducir tus campos aquí usando barberData y handleChange */}

				{/* EJEMPLO DE CAMPO DE TEXTO EDITABLE */}
				{/* <TextForm
            label="Nombre"
            name="name"
            value={barberData.name || ''}
            onChange={handleChange}
        /> */}

				<p className="text-white">
					Formulario listo para {barberData.name || 'Barbero Desconocido'}
				</p>

				<button
					type="submit"
					className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
				>
					Guardar Cambios
				</button>
			</form>
		</div>
	)
}

export default EditBarber
