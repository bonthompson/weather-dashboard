import React from 'react'
import WeatherWidget from '../../components/weather-widget/weather-widget'

const SettingsPage = () => {
  // todo: remove item based on id
  return (
    <div>
      <h1>La météo dans le sud-est de la france</h1>
      <WeatherWidget editable />
    </div>
  )
}
export default SettingsPage
