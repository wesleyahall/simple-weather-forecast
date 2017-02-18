import axios from 'axios'

const API = require('../../auth/openweathermap.json')
const API_KEY = API.key
const REQ_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (searchString) {
  const url = `${REQ_URL}&q=${searchString}, us`
  const request = axios.get(url)
  console.log('Request GET! ', request)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
