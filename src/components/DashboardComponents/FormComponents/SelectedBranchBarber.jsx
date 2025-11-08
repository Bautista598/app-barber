// SelectedBranchBarber.jsx (CÓDIGO CORREGIDO)

function SelectedBranchBarber({ value, handleChange, error }) {
	// 1. Clases del CONTENEDOR (maneja el degradado y el borde)
	const outerContainerClasses = `
    mt-1 
    p-[2px] /* Espacio para que se vea el degradado como borde */
    rounded-xl 
    shadow-lg
    transition-all duration-300 ease-in-out
    
    /* Lógica del Borde Condicional */
    ${
			error
				? 'bg-gradient-to-br from-red-500 to-red-700' // Rojo en error
				: value && value !== ''
				? 'bg-gradient-to-br from-green-500 to-green-700' // Verde si es válido
				: 'bg-gradient-to-br from-blue-400 to-blue-600' // Azul por defecto
		}
  `

	// 2. Clases del SELECT INTERNO (debe tener fondo simple/transparente)
	const innerSelectClasses = `
    block 
    w-full 
    h-8 /* Un poco menos que el contenedor (h-9) - 2px padding arriba/abajo */
    px-3
    rounded-[10px] /* Un poco menos redondeado que el contenedor */
    outline-0
    cursor-pointer
    text-white 
    /* ¡CLAVE! Usar un fondo SÓLIDO y OSCURO para que el texto blanco se vea, o transparente */
    bg-slate-800 
    
    /* Resetear las apariencias nativas para mejor consistencia */
    appearance-none 
    
    /* Si quieres el fondo interno también degradado (más complejo y puede fallar):
    bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
    Pero bg-slate-800 es más seguro. */
  `

	const staticOptions = [
		{ value: '', label: 'Selecciona una sucursal' },
		{ value: 'principal', label: 'Principal' },
		{ value: 'norte', label: 'Norte' },
		{ value: 'sur', label: 'Sur' },
		{ value: 'este', label: 'Este' },
	]

	return (
		<div className="flex flex-col">
			{/* ... Etiqueta Label ... */}
			<label
				htmlFor="sucursal"
				className="tracking-widest text-sm font-medium text-white"
			>
				Sucursal <span className="text-red-500">*</span>
			</label>

			{/* ⬅️ CONTENEDOR EXTERNO: Aplica el borde degradado */}
			<div className={outerContainerClasses}>
				{/* SELECT INTERNO: Estilo funcional */}
				<select
					id="sucursal"
					name="selectBranch" // ⬅️ IMPORTANTE: Usa el nombre que espera tu padre (selectBranch)
					required
					value={value}
					onChange={handleChange}
					className={innerSelectClasses}
				>
					{/* ... Opciones ... */}
					{staticOptions.map((option) => (
						<option
							key={option.value}
							value={option.value}
							// Asegúrate que el color de la opción sea compatible con el color de fondo del selector cuando se abre
							className="bg-gray-800 text-white"
							disabled={option.value === ''}
						>
							{option.label}
						</option>
					))}
				</select>
			</div>

			{/* ... Mensaje de Error ... */}
			{error && <p className="text-xs text-red-500 mt-1">{error}</p>}
		</div>
	)
}

export default SelectedBranchBarber
