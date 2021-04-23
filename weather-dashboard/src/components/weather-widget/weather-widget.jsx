import React, { useState, useEffect } from 'react'
import './weather-widget.css'
import '../../css/weather-icons.min.css'
import DataContext from '../../context/DataContext'

const WeatherWidget = (editable) => {
  const data = React.useContext(DataContext)
  const [filteredItems, setfilteredItems] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setfilteredItems(data)
    console.log(filteredItems)
  }, [])

  useEffect(() => {
    const items = localStorage.getItem('items')
    if (items) {
      try {
        setfilteredItems(JSON.parse(items))
      } catch { console.log('err', items) }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(filteredItems))
  })

  return (
    <div className='weather-widget-container'>

      <div className='container'>
        <div className='row'>
          {
            filteredItems && filteredItems.map((item) =>
              <div className='col-md-4 col-lg-3' key={item.id}>
                {editable.editable === false
                  ? <div className='weather-widget'>
                    <h2>{item.name}</h2>
                    {(() => {
                      switch (item.weather[0].description) {
                        case 'clear sky': return <i className='wi wi-day-sunny' />
                        case 'few clouds': return <i className='wi wi-day-cloudy' />
                        case 'scattered clouds': return <i className='wi wi-cloud' />
                        case 'broken clouds': return <i className='wi wi-cloudy' />
                        case 'shower rain': return <i className='wi wi-day-sleet' />
                        case 'rain': return <i className='wi wi-day-rain' />
                        case 'thunderstorm': return <i className='wi wi-day-thunderstorm' />
                        case 'snow': return <i className='wi wi-day-snow' />
                        case 'mist': return <i className='wi wi-fog' />
                      }
                    })()}
                    <div>{item.weather[0].description}</div>
                    <h3>Temp: {item.main.temp}</h3>
                    <p>Max temp: {item.main.temp_max}</p>
                    <p>Min temp: {item.main.temp_min}</p>
                    <p>Feels like: {item.main.feels_like}</p>
                    <p>Humidity: {item.main.humidity}</p>
                  </div>
                  : <div className='weather-widget-editable-container'>
                    <div onClick={() => setfilteredItems(filteredItems.filter(i => i.id !== item.id))} className='weather-widget-editable'>
                      <h2>{item.name}</h2>
                      {(() => {
                        switch (item.weather[0].description) {
                          case 'clear sky': return <i className='wi wi-day-sunny' />
                          case 'few clouds': return <i className='wi wi-day-cloudy' />
                          case 'scattered clouds': return <i className='wi wi-cloud' />
                          case 'broken clouds': return <i className='wi wi-cloudy' />
                          case 'shower rain': return <i className='wi wi-day-sleet' />
                          case 'rain': return <i className='wi wi-day-rain' />
                          case 'thunderstorm': return <i className='wi wi-day-thunderstorm' />
                          case 'snow': return <i className='wi wi-day-snow' />
                          case 'mist': return <i className='wi wi-fog' />
                        }
                      })()}
                      <div>{item.weather[0].description}</div>
                      <div>
                        <div className='click-to-delete'>Click to delete</div>
                      </div>
                    </div>
                    </div>}
              </div>
            )
        }

          {editable.editable === true &&
          filteredItems.length < 25 &&
            <div className='col-md-4 col-lg-3 drop-down'>
              <button style={{ width: '100%', outline: 'none' }} onClick={() => setToggle(!toggle)}>{toggle ? 'Close' : 'Add'}</button>
              {
                toggle &&
                data.filter(i => !filteredItems.includes(i)).map((it) =>
                  <div
                    onClick={() => setfilteredItems(filteredItems.concat([it]))} key={it.id} className='drop-down-item'
                  >{it.name}
                  </div>
                )
              }
            </div>}
        </div>
      </div>
    </div>
  )
}

export default WeatherWidget
