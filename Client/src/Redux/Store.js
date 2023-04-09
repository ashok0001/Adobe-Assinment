import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import { UserrReducer } from "./User/Reducer";



const rootReducers=combineReducers({

   
    user:UserrReducer,
    
});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))