import React from 'react'
const gradients = {
	green: 'from-green-400 to-green-500',
	blue: 'from-blue-400 to-blue-500',
}

function StatCard({
	icon: Icon, // componente del ícono
	gradient,
	label, // texto descriptivo
	value, // número o texto a mostrar
	isMoney = false, // opcional: si es dinero, agrega $
}) {
	return (
		<div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-slate-700 p-5 sm:p-6 hover:shadow-xl transition-all duration-200 hover:border-amber-400">
			<div className="flex items-center justify-between mb-4">
				<div
					className={`bg-linear-to-br ${gradients[gradient]} rounded-xl p-2.5 shadow-lg`}
				>
					{Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-900" />}
				</div>
			</div>

			<div>
				<p className="text-xs sm:text-sm font-medium text-slate-400 mb-1">
					{label}
				</p>
				<p className="text-2xl sm:text-3xl font-bold text-white">
					{isMoney ? `$${Number(value).toLocaleString('es-AR')}` : value}
				</p>
				<p className="text-xs text-slate-500 mt-2">Hoy</p>
			</div>
		</div>
	)
}

export default StatCard
