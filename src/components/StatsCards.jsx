// Iconos
import { DollarSign, Users } from 'lucide-react'

// Componentes
import StatCard from './StatCard'
import Clock from './Clock'
import Weather from './Weather'

function StatsCards({ earnTod, custTod }) {
	return (
		<div className="grid gap-6 sm:grid-cols-2">
			<StatCard
				icon={DollarSign}
				gradient="green"
				label="Ganancia Total"
				value={earnTod.toFixed(2)}
				isMoney
			/>

			<StatCard
				icon={Users}
				gradient="blue"
				label="Clientes Atendidos"
				value={custTod}
			/>
			<Clock />
			<Weather />
		</div>
	)
}

export default StatsCards
