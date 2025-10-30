import { useState, useEffect } from 'react'

export function useClock() {
	const [time, setTime] = useState(() => new Date())

	useEffect(() => {
		const interval = setInterval(() => setTime(new Date()), 1000)
		return () => clearInterval(interval)
	}, [])

	const formatTime = () =>
		time.toLocaleTimeString('es-AR', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false,
		})

	const formatDate = () =>
		time.toLocaleDateString('es-AR', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})

	return { formatTime, formatDate }
}
