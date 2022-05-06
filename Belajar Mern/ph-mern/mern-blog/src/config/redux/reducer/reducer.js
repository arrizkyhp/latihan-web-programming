import { combineReducers } from "redux"
import globalReducer from "./globalReducer"
import homeReducer from "./homeReducer"

// mengkombinasikan Reducer yang terpisah
const reducer = combineReducers({ homeReducer, globalReducer })

export default reducer;