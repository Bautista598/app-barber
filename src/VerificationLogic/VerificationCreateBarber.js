export const validateForm = (formData, setErrors) => {
		let newErrors = {}

		// Validación: Nombre
		if (!formData.name.trim()) {
			newErrors.name = 'El nombre es obligatorio.'
		} else if (formData.name.length < 3) {
			newErrors.name = 'El nombre debe tener al menos 3 caracteres.'
		}

		// Validación: occupation
		if (!formData.occupation.trim()) {
			newErrors.occupation = 'La ocupación es obligatorio.'
		} else if (formData.occupation.length < 3) {
			newErrors.occupation = 'La ocupación debe tener al menos 3 caracteres.'
		}

		const specialty = formData.specialty ?? 'Barbero'
		// Validación: Especialidad (ej. obligatoria)
		if (!specialty.trim()) {
			newErrors.specialty = 'La especialidad es obligatorio.'
		} else if (specialty.length < 3) {
			newErrors.specialty = 'La especialidad debe tener al menos 3 caracteres.'
		}

		const timeStart = formData.timeStart ?? '12:00:00'
		if (!timeStart.trim()) {
			newErrors.timeStart = 'seleccione la hora de inicio.'
		} else if (timeStart.length < 4) {
			newErrors.timeStart = 'seleccione la hora de inicio.'
		}


		const timeEnd = formData.timeEnd ?? '20:00'
		if (!timeEnd.trim()) {
			newErrors.timeEnd = 'seleccione la hora de fin.'
		} else if (timeEnd.length < 4) {
			newErrors.timeEnd = 'seleccione la hora de fin.'
		}

		if (!formData.selectBranch || formData.selectBranch === '') {
			newErrors.selectBranch = 'Debe seleccionar una sucursal válida.'
		}

		setErrors(newErrors)
		// Retorna true si no hay errores, false si hay errores
		return Object.keys(newErrors).length === 0
	}