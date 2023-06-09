import { BASE_URL } from "../../Config/API";
import {
  CREATE_NEW_POST,
  DELETE_POST,
  FIND_ALL_POST,
  GET_POST_BY_ID,
  GET_TOP_LIKED_POST,
  GET_TOTAL_POST,
  
  LIKE_POST,
  UPDATE_POST,
} from "./ActionType";

export const TopLikedPostAction = (jwt) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/analytics/posts/top-liked`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
    });
    const user = await res.json();
    console.log("Top Like Post :- ", user);
    dispatch({ type: GET_TOP_LIKED_POST, payload: user });
  } catch (error) {
    console.log("catch error ", error);
  }
};

export const findAllPostAction = (jwt) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
    });
    const posts = await res.json();
    console.log("All Post :- ", posts);
    dispatch({ type: FIND_ALL_POST, payload: posts });
  } catch (error) {
    console.log("catch error ", error);
  }
};

// export const createPostAction = (data) => async (dispatch) => {
//   console.log("create post action - ",data.jwt)
//   try {
//     const res = await fetch(`http://localhost:5454/posts`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + data.jwt,
//       },
//       body: JSON.stringify(data.data),
//     });
//     const post = await res.json();
//     console.log("Created Post :- ", post);

//     dispatch({ type: CREATE_NEW_POST, payload: post });
//   } catch (error) {
//     console.log("catch error ", error);
//   }
// };


export const createPostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+data.jwt
      },
      body: JSON.stringify(data),
      
    });
    const post = await res.json();
    console.log("Created post :- ",post,data)
    dispatch({ type: CREATE_NEW_POST, payload: post });
  } catch (error) {
    console.log("catch error ", error);
  }
};

export const deletePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${data.postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+data.jwt
      },
      
    });
    const post = await res.json();
    console.log("Deleted User :- ",post)
    dispatch({ type: DELETE_POST, payload: post });
  } catch (error) {
    console.log("catch error ", error);
  }
};

export const likePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${data.postId}/like`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+ data.jwt
      },
   
    });
    const resData = await res.json();
    console.log("Updated user :- ",resData)

    dispatch({ type: LIKE_POST, payload: resData });
  } catch (error) {
    console.log("catch error ", error);
  }
};

export const unlikePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${data.postId}/unlike`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+ data.jwt
      },
   
    });
    const resData = await res.json();
    console.log("Updated user :- ",resData)

    dispatch({ type: LIKE_POST, payload: resData });
  } catch (error) {
    console.log("catch error ", error);
  }
};

export const findPostByIdAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${data.postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+data.jwt
      },
      
    });
    const user = await res.json();
    console.log("Find By Id :- ",user)
    dispatch({ type: GET_POST_BY_ID, payload: user });
  } catch (error) {
    console.log("catch error ", error);
  }
};

export const totalPost = (jwt) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/analytics/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+jwt
      },
      
    });
    const total = await res.json();
    console.log("total:- ",total)
    dispatch({ type: GET_TOTAL_POST, payload: total });
  } catch (error) {
    console.log("catch error ", error);
  }
};

export const updatePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+data.jwt
      },
      body: JSON.stringify(data),
    });
    const user = await res.json();
    console.log("Updated user :- ",user)

  
    dispatch({ type: UPDATE_POST, payload: user });
  } catch (error) {
    console.log("catch error ", error);
  }
};

export const setFieldToNull = (type) => {
  return dispatch => {
    // Dispatch a regular action to update the field to null
    dispatch({ type: type, payload: null });
  };
};