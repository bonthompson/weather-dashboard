import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'
import DashboardPage from './pages/dashboard-page/dashboard-page'
import SettingsPage from './pages/settings-page/settings-page'
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
    <Router>
      <div className='App'>
        {/* add a header */}
        <DataContext.Provider value={weatherData}>
          <Switch>
            <Route exact path='/' component={DashboardPage} />
            <Route exact path='/settings' component={SettingsPage} />
          </Switch>
        </DataContext.Provider>
      </div>
    </Router>

  )
}

export default App
