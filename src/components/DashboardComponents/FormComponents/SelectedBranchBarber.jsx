function SelectedBranchBarber() {
	return (
		<div>
			<label
				htmlFor="sucursal"
				className="block text-sm font-medium text-gray-700"
			>
				Sucursal <span className="text-red-500">*</span>
			</label>
			<select id="sucursal" name="sucursal" required>
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
