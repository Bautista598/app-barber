import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'

import { Calendar, Scissors as ScissorsIcon, CheckCircle } from 'lucide-react'

import CardAppointment from '../components/SeeQuotesComponents/CardAppointment'

function SeeQuotes() {
	const [appointments, setAppointments] = useState([])

	const [showSuccess, setShowSuccess] = useState(false)
	const [loading, setLoading] = useState(true)
	const location = useLocation()

	useEffect(() => {
		if (location.state?.success) {
			setShowSuccess(true)
			setTimeout(() => setShowSuccess(false), 3000)
		}
	}, [location])

	useEffect(() => {
		const loadData = async () => {
			try {
				// Intentar obtener los datos
				const res = await fetch('/public/data_test/data_appointments.json')

				// Verificar si la respuesta fue exitosa
				if (!res.ok) throw new Error(`Error HTTP: ${res.status}`)

				const data = await res.json()

				// Verificar que los datos sean un array o contengan "barberos"
				setAppointments(Array.isArray(data) ? data : data.barber ?? [])
			} catch (error) {
				console.error('Error al cargar barberos:', error)
			} finally {
				setLoading(false)
			}
		}

		loadData()
	}, [])

	if (loading) {
		return (
			<div className="flex items-center justify-center h-96">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div>
			</div>
		)
	}

	return (
		<div className="max-w-6xl mx-auto relative">
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(15)].map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-linear-to-br from-amber-300 to-orange-400 opacity-10 blur-xl animate-float"
						style={{
							width: `${Math.random() * 100 + 50}px`,
							height: `${Math.random() * 100 + 50}px`,
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 5}s`,
							animationDuration: `${Math.random() * 10 + 10}s`,
						}}
					/>
				))}
			</div>

			{showSuccess && (
				<div className="mb-6 bg-linear-to-r from-green-500 to-green-600 border-2 border-green-400 rounded-xl p-4 flex items-center space-x-3 animate-in fade-in slide-in-from-top duration-300 relative z-10">
					<CheckCircle className="h-6 w-6 text-white" />
					<p className="text-white font-medium">Cita agendada exitosamente</p>
				</div>
			)}

			<div className="relative bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 p-4 sm:p-6">
				<div className="mb-6">
					<h2 className="text-2xl sm:text-3xl font-bold text-white">
						Citas Agendadas
					</h2>
					<p className="text-slate-400 mt-2 text-sm sm:text-base">
						Gestiona todas las citas pendientes
					</p>
				</div>

				{appointments.length === 0 ? (
					<div className="text-center py-12">
						<Calendar className="h-16 w-16 text-slate-600 mx-auto mb-4" />
						<p className="text-lg font-medium text-slate-400">
							No hay citas agendadas
						</p>
						<p className="text-sm text-slate-500 mt-1">
							Las nuevas citas aparecerán aquí
						</p>
					</div>
				) : (
					<div className="space-y-3 sm:space-y-4">
						{appointments.map((appointments) => (
							<div
								key={
									appointments.id || `${appointments.name}-${appointments.id}`
								}
							>
								<CardAppointment appointment={appointments} />
							</div>
						))}
					</div>
				)}
			</div>

			<style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, -20px); }
          50% { transform: translate(-15px, 15px); }
          75% { transform: translate(15px, 10px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
		</div>
	)
}

export default SeeQuotes
