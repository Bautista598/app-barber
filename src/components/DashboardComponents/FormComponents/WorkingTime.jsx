import React from 'react'

function WorkingTime({ name, handleChange, value, error }) {
	const isDirty = !!value // True si el campo tiene algún valor
	const hasError = !!error

	const stateValidateStyle = `mt-1 
    p-[3px] 
    rounded-xl 
    shadow-lg
    transition-all duration-300 ease-in-out
    ${
			hasError // 1. Prioridad: ¿Hay error? -> ROJO
				? 'bg-gradient-to-br from-red-500 to-red-700'
				: isDirty // 2. Siguiente prioridad: ¿Hay valor (y no hay error)? -> VERDE
				? 'bg-gradient-to-br from-green-500 to-green-700'
				: 'bg-gradient-to-br from-blue-400 to-blue-600' // 3. Por defecto (vacío y sin error): AZUL
		}
			`

	const inputClasses = `
    block 
    w-34
    p-2 
    bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
    rounded-[10px]
    shadow-inner 
    transition-colors
    duration-200
    focus:outline-none 
    
    ${hasError ? 'text-red-400' : 'text-gray-400 focus:text-white'}
  `

	return (
		<div>
			<div className={stateValidateStyle}>
				<input
					type="time"
					name={name}
					id={name}
					onChange={handleChange}
					value={value}
					className={inputClasses}
				/>
			</div>

			{error && <p className="text-xs text-red-500 mt-1">{error}</p>}
		</div>
	)
}

export default WorkingTime
