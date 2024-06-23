import axios from "axios"

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const apikey = import.meta.env.VITE_SOME_KEY

const getWeather = (lat, lon) => {
  const request = axios.get(`${baseUrl}lat=${lat}&lon=${lon}&appid=${apikey}`)
  return request.then(response => response.data)
}

export default {
  getWeather
}