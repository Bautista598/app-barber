import { useEffect, useMemo, useState } from 'react'

const SelectDateTime = ({
	selectedBarber,
	selectedDate,
	setSelectedDate,
	selectedTime,
	setSelectedTime,
}) => {
	const [diasOcupados, setDiasOcupados] = useState([])

	useEffect(() => {
		if (selectedBarber && selectedDate) checkDiasOcupados()
	}, [selectedBarber, selectedDate])

	const checkDiasOcupados = () => {
		const citasFake = [
			{ fecha_hora: `${selectedDate}T10:00:00` },
			{ fecha_hora: `${selectedDate}T13:30:00` },
			{ fecha_hora: `${selectedDate}T15:00:00` },
		]

		const horas = citasFake.map((cita) => {
			const fecha = new Date(cita.fecha_hora)
			return `${fecha.getHours().toString().padStart(2, '0')}:${fecha
				.getMinutes()
				.toString()
				.padStart(2, '0')}`
		})
		setDiasOcupados(horas)
	}

	const generateTimeSlots = useMemo(() => {
		if (!selectedBarber) return []
		const inicio = selectedBarber.start_time || '09:00:00'
		const fin = selectedBarber.end_time || '18:00:00'
		const [inicioHora] = inicio.split(':').map(Number)
		const [finHora] = fin.split(':').map(Number)

		const slots = []
		for (let h = inicioHora; h < finHora; h++) {
			slots.push(`${h.toString().padStart(2, '0')}:00`)
			slots.push(`${h.toString().padStart(2, '0')}:30`)
		}
		return slots
	}, [selectedBarber])

	const getTodayDate = () => new Date().toISOString().split('T')[0]

	return (
		<div className="bg-slate-800 text-slate-200 p-4 rounded-lg">
			<h2 className="text-xl font-semibold mb-4">Seleccioná fecha y hora</h2>

			<div className="mb-4">
				<label className="block mb-1">Fecha:</label>
				<input
					type="date"
					value={selectedDate}
					min={getTodayDate()}
					onChange={(e) => setSelectedDate(e.target.value)}
					className="px-3 py-2 rounded-md bg-slate-700 text-white border border-slate-600"
				/>
			</div>

			<div className="mb-4">
				<label className="block mb-1">Hora:</label>
				<select
					value={selectedTime}
					onChange={(e) => setSelectedTime(e.target.value)}
					className="px-3 py-2 rounded-md bg-slate-700 text-white border border-slate-600 w-full"
				>
					<option value="">Seleccionar hora</option>
					{generateTimeSlots.map((hora) => (
						<option
							key={hora}
							value={hora}
							disabled={diasOcupados.includes(hora)}
						>
							{hora} {diasOcupados.includes(hora) ? '(ocupado)' : ''}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default SelectDateTime
