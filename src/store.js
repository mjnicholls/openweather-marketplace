/* eslint-disable */
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

//import rootReducer from './reducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

//const store = createStore(rootReducer, composedEnhancer)

const store = createStore( composedEnhancer)

export default store
