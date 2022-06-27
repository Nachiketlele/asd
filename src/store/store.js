import { legacy_createStore, combineReducers, compose, applyMiddleware} from "redux"
import { counterreducer } from "./counter.reducer"
import { todoreducer } from "./todo.reducer"
import thunk from "redux-thunk"
import { authReducer } from "./auh/auth.reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
    counter: counterreducer,
    todo: todoreducer,
    auth: authReducer,
})


export const store = legacy_createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))