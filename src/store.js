import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import items from './reducers/itemsReducer'
import basket from './reducers/basketReducer'
import order from './reducers/orderReducer'

const reducer = combineReducers({items, basket, order})

const basketItemsStorage = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
const personalDetailsStorage = localStorage.getItem('personalDetails') ? JSON.parse(localStorage.getItem('personalDetails')) : {}


const initialState = {
    basket:{basket:basketItemsStorage,personalDetails:personalDetailsStorage},
    // basket:basketItemsStorage,
    // personalDetails:personalDetailsStorage
}
// const initialState = []
const middleware = [thunk]

const store = createStore(reducer, initialState.basket, composeWithDevTools(applyMiddleware(...middleware)))

export default store