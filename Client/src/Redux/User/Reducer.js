import { CREATE_USER, GET_TOP_ACTIVE_USER, REQ_USER } from "./ActionType";


const initialValue={
    createdUser:null,
    reqUser:null,
    activeUsers:null
    
}

export const UserrReducer=(store=initialValue,{type,payload})=>{

    if(type===CREATE_USER){
        return{...store,createdUser:payload}
    }
    else if(type===REQ_USER){
        return{...store,reqUser:payload}
    }
    else if(type===GET_TOP_ACTIVE_USER){
        return {...store,activeUsers:payload}
    }

    return store;

}