function SelectedBranchBarber() {
	return (
		<div className="flex flex-col">
			<label
				htmlFor="sucursal"
				className="tracking-widest text-sm font-medium text-white"
			>
				Sucursal <span className="text-red-500">*</span>
			</label>
			<select
				id="sucursal"
				name="sucursal"
				required
				className="mt-1 
				outline-0
      rounded-xl 
			h-9
      bg-linear-to-br from-blue-400 to-blue-600  
      shadow-lg focus:border-0 text-white"
			>
				<option value="">Selecciona una sucursal</option>
				<option value="principal">Principal</option>
				<option value="norte">Norte</option>
				<option value="sur">Sur</option>
				<option value="este">Este</option>
			</select>
		</div>
	)
}

export default SelectedBranchBarber
