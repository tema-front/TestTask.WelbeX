import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { todosReducer } from './todos/reducer'

const rootReducer = combineReducers({
    stateTodos: todosReducer,
})

const composeEnhancert = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(
    rootReducer,
    composeEnhancert(applyMiddleware(thunk))
)