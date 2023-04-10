import { CREATE_USER, DELET_USER, FIND_ALL_USER, FIND_USER_BY_USER_ID, GET_TOP_ACTIVE_USER, REQ_USER, UPDATE_USER } from "./ActionType";


const initialValue={
    createdUser:null,
    reqUser:null,
    activeUsers:null,
    users:null,
    deletedUser:null,
    updatedUser:null,
    findById:null
    
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
    else if(type===FIND_ALL_USER){
        return {...store,users:payload}
    }
    else if(type===DELET_USER){
        return {...store,deletedUser:payload}
    }
    else if(type===UPDATE_USER){
        return {...store,updatedUser:payload}
    }
    else if(type===FIND_USER_BY_USER_ID){
        return {...store,findById:payload}
    }


    return store;

}