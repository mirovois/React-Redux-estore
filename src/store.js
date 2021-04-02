import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import items from './reducers/itemsReducer'
import basket from './reducers/basketReducer'

const reducers = combineReducers({items, basket})

const basketItemsStorage = JSON.parse(localStorage.getItem('basket'))

const initialState = {
    basket:basketItemsStorage
}

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)))

export default store