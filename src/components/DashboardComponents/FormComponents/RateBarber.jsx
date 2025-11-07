import React from 'react'

function RateBarber() {
	return (
		<div>
			<label
				htmlFor="puntuacion"
				className="block tracking-widest text-sm font-medium text-white"
			>
				Puntuación (Opcional)
			</label>
			<div
				className="mt-1 
      p-[3px]  
      rounded-xl 
      bg-linear-to-br from-blue-400 to-blue-600  
      shadow-lg"
			>
				<input
					type="number"
					id="puntuacion"
					name="puntuacion"
					min="0"
					max="5"
					step="0.1"
					placeholder="0.0 a 5.0"
					className=" block 
        w-full 
        p-2 
        bg-linear-to-br from-slate-900 via-slate-800 to-slate-900
        rounded-[10px]
        shadow-inner 
        text-gray-400
				transition-colors
				duration-200
        focus:outline-none 
				focus:text-white"
				/>
			</div>
		</div>
	)
}

export default RateBarber
