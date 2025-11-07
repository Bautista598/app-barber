import React from 'react'

function WorkingTime() {
	return (
		<div>
			<label
				htmlFor="TimeStart"
				className="tracking-widest text-sm font-medium text-white"
			>
				Horario{' '}
			</label>
			<span className="flex justify-between items-center">
				<input
					type="time"
					name="TimeStart"
					id="TimeStart"
					className="bg-blue-500 w-32 h-10 text-white rounded-2xl flex items-center justify-center"
				/>
				-
				<input
					type="time"
					name="TimeEnd"
					id="TimeEnd"
					className="bg-blue-500 w-32 h-10 text-white rounded-2xl flex items-center justify-center"
				/>
			</span>
		</div>
	)
}

export default WorkingTime
