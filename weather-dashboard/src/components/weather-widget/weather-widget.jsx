import React from 'react'
import './weather-widget.css'
import '../../css/weather-icons.min.css'
import DataContext from '../../context/DataContext'

const WeatherWidget = () => {
  const data = React.useContext(DataContext)

  // todo: add styling
  return (
    <div className='weather-widget-container'>
      {console.log(data)}

      <div className='container'>
        <i className='wi wi-day-sunny' />
        <div className='row'>
          {
            data.list && data.list.map((item) =>
              <div className='col-md-3' key={item.id}>
                <div className='weather-widget'>
                  <h2>{item.name}</h2>
                  <div>{item.weather[0].icon}</div>
                  {console.log(item.weather[0].description)}
                  <p><i className={item.weather[0].description} /></p>
                  <div>{item.weather[0].description}</div>
                  <h3>Temp: {item.main.temp}</h3>
                  <p>{item.main.temp_max}</p>
                  <p>{item.main.temp_min}</p>
                  <p>{item.main.feels_like}</p>
                  <p>{item.main.humidity}</p>
                </div>
              </div>
            )
        }
        </div>
      </div>

    </div>
  )
}

export default WeatherWidget
