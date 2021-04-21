import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DashboardPage from './pages/dashboard-page/dashboard-page'
import DataContext from './context/DataContext'
import './App.css'

// bbox [lon-left,lat-bottom,lon-right,lat-top,zoom]
const apiUrl = 'http://api.openweathermap.org/data/2.5/box/city?bbox=2,43,6,44,10&appid=1f5e53cf4ead950fa98ba2791e9261c7'

function App () {
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        setWeatherData(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className='App'>
      <DataContext.Provider value={weatherData}>
        <DashboardPage />
      </DataContext.Provider>

    </div>
  )
}

export default App
