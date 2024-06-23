import { useEffect,useState } from "react"
import weatherService from '../services/weather'

const Weather = ({ city, weatherInfo }) => {
  const tempCelcius= (Math.round((weatherInfo.main.temp-273.15)*100)/100).toFixed(2)
  const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`
  return (
    <>
      <h3>Weather in {city}</h3>
      <div>temperature {tempCelcius} Celcius</div>
      <img src={iconUrl} alt={weatherInfo.weather[0].description}></img>
      <div>wind {weatherInfo.wind.speed} m/s</div>
    </>
  )
}

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    console.log('weather effect', country.capitalInfo.latlng[0])
    weatherService
    .getWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
    .then(weatherInfo => {
      console.log(weatherInfo)
        setWeather(weatherInfo)
    }) 
  },[country])

  return (
    <div>
      {weather === null
        ? null
        :<><h2>{country.name.common}</h2>
        {country.capital.map(capital =>
          <div key={capital}> {capital}</div>
        )}
        <div>area {country.area}</div>
        <h3>languages:</h3>
        <ul>
          {Object.entries(country.languages).map(([key, value]) =>
            <li key={key}>{value}</li>
          )}
        </ul>
        <img src={country.flags['png']} alt={country.flags.alt}></img>
        <Weather city={country.capital[0]} weatherInfo={weather} />
        </>
      }
    </div>
)}

export default Country

