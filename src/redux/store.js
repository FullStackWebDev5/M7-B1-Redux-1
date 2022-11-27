import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import countReducer from './count/reducer'
import displayReducer from './display/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
	countReducer,
	displayReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(createLogger()))
);

export default store