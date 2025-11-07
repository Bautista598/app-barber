import TextForm from './FormComponents/TextForm'
import WorkingTime from './FormComponents/WorkingTime'
import SelectedBranchBarber from './FormComponents/SelectedBranchBarber'
import RateBarber from './FormComponents/RateBarber'

import { useState } from 'react'

const CreateBarber = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const [validate, setValidate] = useState({
		ftProfile: null,
		name: null,
		occupation: null,
		especially: null,
		rate: null,
		timeStart: null,
		timeEnd: null,
		selectBranch: null,
	})

	return (
		<div className="max-w-xl mx-auto p-6 rounded-lg mt-10 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
			<h2 className="text-2xl font-bold mb-6 text-white border-b pb-2">
				Crear Barbero
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label
						htmlFor="fotoPerfil"
						className="block text-sm font-medium text-white"
					>
						Foto de Perfil (Opcional)
					</label>
					<input
						type="file"
						id="fotoPerfil"
						name="fotoPerfil"
						accept="image/*"
						className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
					/>
				</div>

				<TextForm label="Nombre" placeholder="Juan Perez" />
				<TextForm label="Ocupación" placeholder="Barbero" />
				<TextForm label="Especialidad" placeholder="Cortes clásicos" />

				<RateBarber />

				<WorkingTime />

				<SelectedBranchBarber />

				<button
					type="submit"
					className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
				>
					Guardar Perfil
				</button>
			</form>
		</div>
	)
}

export default CreateBarber
