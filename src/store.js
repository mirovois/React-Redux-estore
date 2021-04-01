import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import items from './reducers/itemsReducer'

const reducers = combineReducers({items})



const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store