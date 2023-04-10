import { BASE_URL } from "../../Config/API";
import { CREATE_USER, FIND_ALL_USER, GET_TOP_ACTIVE_USER, REQ_USER } from "./ActionType";


export const createUserAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const user = await res.json();
      console.log("Create :- ",user)

      if(user.jwt){
        localStorage.setItem("jwt",user.jwt)
      }
      
      dispatch({ type: CREATE_USER, payload: user });
    } catch (error) {
      console.log("catch error ", error);
    }
  };

  export const findAllUserAction = (jwt) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+jwt
        },
        
      });
      const users = await res.json();
      console.log("All users :- ",users)
      dispatch({ type: FIND_ALL_USER, payload: users });
    } catch (error) {
      console.log("catch error ", error);
    }
  };

  export const getUsersProfileAction = (jwt) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/users/req`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+jwt
        },
        
      });
      const user = await res.json();
      console.log("Req user :- ",user)
      dispatch({ type: REQ_USER, payload: user });
    } catch (error) {
      console.log("catch error ", error);
    }
  };

  export const findAllUsersAction = (jwt) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/users/req`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+jwt
        },
        
      });
      const user = await res.json();
      console.log("Req user :- ",user)
      dispatch({ type: REQ_USER, payload: user });
    } catch (error) {
      console.log("catch error ", error);
    }
  };

  export const GetTopActiveUsersAction = (jwt) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/analytics/users/top-active`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+jwt
        },
        
      });
      const user = await res.json();
      console.log("Top Active user :- ",user)
      dispatch({ type: GET_TOP_ACTIVE_USER, payload: user });
    } catch (error) {
      console.log("catch error ", error);
    }
  };