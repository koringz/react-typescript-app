import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import * as home from './home/reducer'
import * as table from './table/reducer'

const reducers = combineReducers({ ...home, ...table  })

const store = createStore(reducers, applyMiddleware(logger, thunk))

export default store
