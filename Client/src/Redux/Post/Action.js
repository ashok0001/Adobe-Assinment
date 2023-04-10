import { BASE_URL } from "../../Config/API";
import { CREATE_NEW_POST, FIND_ALL_POST, GET_TOP_LIKED_POST } from "./ActionType";

export const TopLikedPostAction = (jwt) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/analytics/posts/top-liked`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+jwt
        },
        
      });
      const user = await res.json();
      console.log("Top Like Post :- ",user)
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
          "Authorization":"Bearer "+jwt
        },
        
      });
      const posts = await res.json();
      console.log("Top Like Post :- ",posts)
      dispatch({ type: FIND_ALL_POST, payload: posts });
    } catch (error) {
      console.log("catch error ", error);
    }
  };

  export const createPostAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+data.jwt

        },
        body: JSON.stringify(data.data),
      });
      const post = await res.json();
      console.log("Created Post :- ",post)

      
      dispatch({ type: CREATE_NEW_POST, payload: post });
    } catch (error) {
      console.log("catch error ", error);
    }
  };