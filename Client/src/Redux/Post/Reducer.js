import { CREATE_NEW_POST, DELETE_POST, FIND_ALL_POST, GET_TOP_LIKED_POST, LIKE_POST, UNLIKE_POST } from "./ActionType";


const initialValue={
    createdPost:null,
    topLikedPosts:null,
    posts:null,
    deletedPost:null,
    likePost:null,
    unlikePost:null
    
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
    else if(type===DELETE_POST){
        return {...store, deletedPost:payload}
    }
    else if(type===LIKE_POST){
        return {...store, likedPost:payload}
    }
    else if(type===UNLIKE_POST){
        return {...store, unlikedPost:payload}
    }
   

    return store;

}