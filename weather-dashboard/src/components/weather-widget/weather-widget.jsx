import React from 'react'
import './weather-widget.css'
import '../../css/weather-icons.min.css'
import DataContext from '../../context/DataContext'

const WeatherWidget = (editable) => {
  const data = React.useContext(DataContext)

  // todo: add styling
  // change order by drag!
  return (
    <div className='weather-widget-container'>
      {console.log('hi', editable.editable)}

      <div className='container'>
        <div className='row'>
          {/* <i className='wi wi-day-sunny' /> */}

          {
            data.list && data.list.map((item) =>
              <div className='col-md-4 col-lg-3' key={item.id}>
                {editable.editable === false
                  ? <div className='weather-widget'>
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
                  : <div className='weather-widget-editable-container'>
                    <div className='weather-widget-editable'>
                      <h2>{item.name}</h2>
                      <div>{item.weather[0].icon}</div>
                      {console.log(item.weather[0].description)}
                      <p><i className={item.weather[0].description} /></p>
                      <div>{item.weather[0].description}</div>
                      <h3>Temp: {item.main.temp}</h3>
                    </div>
                    <h4 className='remove-text'>Remove Widget</h4>
                    </div>}
              </div>
            )
        }
        </div>

      </div>
    </div>
  )
}

export default WeatherWidget
