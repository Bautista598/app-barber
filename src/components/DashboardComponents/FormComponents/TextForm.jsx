function TextForm({ placeholder, label, name, handleChange, error, value }) {
	return (
		<div>
			<label
				htmlFor="nombre"
				className="tracking-widest text-sm font-medium text-white flex items-center justify-between"
			>
				{label}
			</label>

			<div
				className="
      mt-1 
      p-[3px]  
      rounded-xl 
      bg-linear-to-br from-blue-400 to-blue-600  
      shadow-lg
    "
			>
				<input
					type="text"
					id={label}
					onChange={handleChange}
					name={name}
					value={value}
					placeholder={placeholder}
					required
					className="
        block 
        w-full 
        p-2 
        bg-linear-to-br from-slate-900 via-slate-800 to-slate-900
        rounded-[10px]
        shadow-inner 
        text-gray-400
				transition-colors
				duration-200
        focus:outline-none 
				focus:text-white
      "
				/>
			</div>
			{error && <p className="text-xs text-red-500 mt-1">{error}</p>}
		</div>
	)
}

export default TextForm
