import React from 'react'

function TextForm() {
	return (
		<div>
			<label
				htmlFor="nombre"
				className="block text-sm font-medium text-gray-700"
			>
				Nombre <span className="text-red-500">*</span>
			</label>
			<input type="text" id="nombre" name="nombre" value={''} required />
		</div>
	)
}

export default TextForm
