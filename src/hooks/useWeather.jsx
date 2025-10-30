import { useState, useEffect } from 'react'

export function useWeather() {
	const [weather, setWeather] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await fetch(
					'https://api.open-meteo.com/v1/forecast?latitude=-34.6037&longitude=-58.3816&current=temperature_2m,weather_code&timezone=America/Argentina/Buenos_Aires'
				)
				const data = await response.json()

				const weatherCode = data.current.weather_code
				const condition = getWeatherCondition(weatherCode)
				const icon = getWeatherIcon(weatherCode)

				setWeather({
					temperature: Math.round(data.current.temperature_2m),
					condition,
					location: 'Buenos Aires',
					icon,
				})
			} catch (error) {
				console.error('Error fetching weather:', error)
				setWeather({
					temperature: 22,
					condition: 'Despejado',
					location: 'Buenos Aires',
					icon: '☀️',
				})
			} finally {
				setLoading(false)
			}
		}

		fetchWeather()
		const interval = setInterval(fetchWeather, 600000)

		return () => clearInterval(interval)
	}, [])

	return { weather, loading }
}

function getWeatherCondition(code) {
	if (code === 0) return 'Despejado'
	if (code <= 3) return 'Parcialmente nublado'
	if (code <= 48) return 'Nublado'
	if (code <= 67) return 'Lluvia'
	if (code <= 77) return 'Nieve'
	if (code <= 82) return 'Lluvias'
	if (code <= 86) return 'Nieve'
	return 'Tormenta'
}

function getWeatherIcon(code) {
	if (code === 0) return '☀️'
	if (code <= 3) return '⛅'
	if (code <= 48) return '☁️'
	if (code <= 67) return '🌧️'
	if (code <= 77) return '❄️'
	if (code <= 82) return '🌦️'
	if (code <= 86) return '🌨️'
	return '⛈️'
}
