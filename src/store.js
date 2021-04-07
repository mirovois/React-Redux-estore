import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import items from './reducers/itemsReducer'
import basket from './reducers/basketReducer'

const reducer = combineReducers({items, basket})

const basketItemsStorage = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []

const initialState = {
    basket:basketItemsStorage
}
// const initialState = []
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store