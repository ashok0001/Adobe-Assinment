import { CREATE_USER } from "./ActionType";


const initialValue={
    createdUser:null,
    
}

export const UserrReducer=(store=initialValue,{type,payload})=>{

    if(type===CREATE_USER){
        return{...store,createdUser:payload}
    }
    

    return store;

}