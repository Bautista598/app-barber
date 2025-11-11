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

		// Validación: Especialidad (ej. obligatoria)
		if (!formData.especially.trim()) {
			newErrors.especially = 'La especialidad es obligatorio.'
		} else if (formData.especially.length < 3) {
			newErrors.especially = 'La especialidad debe tener al menos 3 caracteres.'
		}

		if (!formData.timeStart.trim()) {
			newErrors.timeStart = 'seleccione la hora de inicio.'
		} else if (formData.timeStart.length < 4) {
			newErrors.timeStart = 'seleccione la hora de inicio.'
		}

		if (!formData.timeEnd.trim()) {
			newErrors.timeEnd = 'seleccione la hora de fin.'
		} else if (formData.timeEnd.length < 4) {
			newErrors.timeEnd = 'seleccione la hora de fin.'
		}

		if (!formData.selectBranch || formData.selectBranch === '') {
			newErrors.selectBranch = 'Debe seleccionar una sucursal válida.'
		}

		setErrors(newErrors)
		// Retorna true si no hay errores, false si hay errores
		return Object.keys(newErrors).length === 0
	}