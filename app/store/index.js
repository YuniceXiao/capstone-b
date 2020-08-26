import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import users from './users'
import singleUser from './singleUser'
import listPrivate from './listPrivate'
import listHousehold from "./listHousehold"
import households from "./households"

const reducer = combineReducers({ users, singleUser, households, listPrivate, listHousehold})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
