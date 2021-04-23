import React from 'react'
import WeatherWidget from '../../components/weather-widget/weather-widget'

const SettingsPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Edit Your Dashboard</h1>
      <WeatherWidget editable />
    </div>
  )
}
export default SettingsPage
