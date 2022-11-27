import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import countReducer from './count/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(
  countReducer,
  composeWithDevTools(applyMiddleware(createLogger()))
);

export default store