import { FETCH_WEATHER } from '../../actions/FETCH_WEATHER'

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]
  }
  return state
}
