import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import { UserrReducer } from "./User/Reducer";
import { PostReducer } from "./Post/Reducer";



const rootReducers=combineReducers({

   
    user:UserrReducer,
    post:PostReducer,
    
});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))