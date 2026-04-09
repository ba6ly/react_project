import { useState } from 'react'
import { FiSearch, FiWind, FiDroplet, FiThermometer } from 'react-icons/fi'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const weatherIcons = {
  Clear: '☀️',
  Clouds: '☁️',
  Rain: '🌧️',
  Drizzle: '🌦️',
  Thunderstorm: '⛈️',
  Snow: '❄️',
  Mist: '🌫️',
  Fog: '🌫️',
  Haze: '🌫️',
}

function Weather() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeather = async () => {
    if (!city.trim()) return
    setLoading(true)
    setError(null)
    setWeather(null)
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      )
      if (!res.ok) {
        if (res.status === 404) throw new Error('City not found. Please check the name.')
        if (res.status === 401) throw new Error('Invalid API key. Please add your OpenWeatherMap key.')
        throw new Error('Something went wrong. Try again.')
      }
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') fetchWeather()
  }

  const main = weather?.weather?.[0]?.main
  const emoji = weatherIcons[main] || '🌡️'

  return (
    <div className="page weather-page">
      <div className="page-header">
        <h2 className="page-title">Weather</h2>
        <p className="page-subtitle">Live conditions for any city worldwide.</p>
      </div>

      <div className="weather-search">
        <div className="search-row">
          <input
            type="text"
            className="weather-input"
            placeholder="Enter city name…"
            value={city}
            onChange={e => setCity(e.target.value)}
            onKeyDown={handleKey}
          />
          <button className="weather-btn" onClick={fetchWeather} disabled={loading}>
            {loading ? '…' : <FiSearch size={20} />}
          </button>
        </div>
        {API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY' && (
          <p className="api-notice">
            ⚠️ Replace <code>YOUR_OPENWEATHERMAP_API_KEY</code> in <code>Weather.jsx</code> with your free key from{' '}
            <a href="https://openweathermap.org/api" target="_blank" rel="noreferrer">openweathermap.org</a>.
          </p>
        )}
      </div>
      {error && <div className="error-msg weather-error">{error}</div>}
      {weather && (
        <div className="weather-card">
          <div className="weather-top">
            <div className="weather-emoji">{emoji}</div>
            <div>
              <h3 className="weather-city">{weather.name}, {weather.sys.country}</h3>
              <p className="weather-condition">{weather.weather[0].description}</p>
            </div>
          </div>
          <div className="weather-temp">{Math.round(weather.main.temp)}°C</div>
          <p className="weather-feels">Feels like {Math.round(weather.main.feels_like)}°C</p>
          <div className="weather-stats">
            <div className="weather-stat">
              <FiThermometer className="stat-icon" />
              <span>{Math.round(weather.main.temp_min)}° / {Math.round(weather.main.temp_max)}°</span>
              <small>Min / Max</small>
            </div>
            <div className="weather-stat">
              <FiDroplet className="stat-icon" />
              <span>{weather.main.humidity}%</span>
              <small>Humidity</small>
            </div>
            <div className="weather-stat">
              <FiWind className="stat-icon" />
              <span>{Math.round(weather.wind.speed * 3.6)} km/h</span>
              <small>Wind</small>
            </div>
          </div>
        </div>
      )}
      {!weather && !error && !loading && (
        <div className="weather-placeholder">
          <div className="placeholder-globe">🌍</div>
          <p>Search a city to see current weather conditions</p>
        </div>
      )}
    </div>
  )
}

export default Weather
