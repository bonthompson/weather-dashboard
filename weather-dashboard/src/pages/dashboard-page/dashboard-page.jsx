import React from 'react'
import WeatherWidget from '../../components/weather-widget/weather-widget'

const DashboardPage = () => {
  // todo: remove item based on id
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>La météo dans le sud-est de la france</h1>
      <WeatherWidget editable={false} />
    </div>
  )
}
export default DashboardPage
