import React from 'react'

function RateBarber() {
	return (
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
				min="0"
				max="5"
				step="0.1"
				placeholder="0.0 a 5.0"
				className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
			/>
		</div>
	)
}

export default RateBarber
