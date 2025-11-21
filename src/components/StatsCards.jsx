import { useState, useEffect } from 'react'

// Iconos
import { DollarSign, Users } from 'lucide-react'

// Componentes
import StatCard from './StatCard'
import Clock from './Clock'
import Weather from './Weather'

const getDataTotals = (dataObj) => {
	// dataObj DEBE ser el array de barberos
	const totals = dataObj.reduce(
		(accumulator, currentItem) => {
			// Suma la ganancia del barbero actual al acumulador
			accumulator.earningsTotal += +currentItem.earnings_today

			// Suma los clientes del barbero actual al acumulador
			accumulator.customersTotal += +currentItem.customers_today

			// Retorna el acumulador actualizado para la siguiente iteración
			return accumulator
		},
		{ earningsTotal: 0, customersTotal: 0 } // Estado inicial del acumulador
	)

	return totals // Retorna el objeto final con las sumas
}

function StatsCards() {
	const [totals, setTotals] = useState({
		earningsTotal: 0,
		customersTotal: 0,
	})

	useEffect(() => {
		const getValueCard = async () => {
			const URL = '/data_test/data_barber.json'
			try {
				const res = await fetch(URL)
				if (!res.ok) {
					throw new Error(`HTTP Error: ${res.status}`)
				}

				const dataNum = await res.json()

				const calculatedTotals = getDataTotals(dataNum)

				setTotals(calculatedTotals)
			} catch (error) {
				console.error('Error al cargar datos:', error)
				setTotals({ earningsTotal: 'Error', customersTotal: 'Error' })
			}
		}

		getValueCard()
	}, [])

	return (
		<div className="grid gap-6 sm:grid-cols-4">
			<StatCard
				icon={DollarSign}
				gradient="green"
				label="Ganancia Total"
				value={totals.earningsTotal}
				isMoney
			/>

			<StatCard
				icon={Users}
				gradient="blue"
				label="Clientes Atendidos"
				value={totals.customersTotal}
			/>
			<Clock />
			<Weather />
		</div>
	)
}

export default StatsCards
