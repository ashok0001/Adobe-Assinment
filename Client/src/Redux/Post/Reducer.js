import { CREATE_NEW_POST, FIND_ALL_POST, GET_TOP_LIKED_POST } from "./ActionType";


const initialValue={
    createdPost:null,
   topLikedPosts:null,
   posts:null
    
}

export const PostReducer=(store=initialValue,{type,payload})=>{

    if(type===GET_TOP_LIKED_POST){
        return{...store,topLikedPosts:payload}
    }
    else if(type===CREATE_NEW_POST){
        return{...store,createdPost:payload}
    }
    else if(type===FIND_ALL_POST){
        return {...store, posts:payload}
    }
   

    return store;

}