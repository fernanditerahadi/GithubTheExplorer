import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import appReducer from '../reducers/App'

const loggerMiddleware = createLogger()
const useReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default function configureStore() {
  return createStore(
    appReducer,
    useReduxDevTools,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}