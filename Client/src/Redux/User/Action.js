import { BASE_URL } from "../../Config/API";
import { CREATE_USER, DELET_USER, FIND_ALL_USER, FIND_USER_BY_USER_ID, GET_TOP_ACTIVE_USER, REQ_USER, TOTAL_USER, UPDATE_USER } from "./ActionType";


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

  export const updateUserAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/users/${data.userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+data.jwt
        },
        body: JSON.stringify(data.data),
      });
      const user = await res.json();
      console.log("Updated user :- ",user)

      
      
      dispatch({ type: UPDATE_USER, payload: user });
    } catch (error) {
      console.log("catch error ", error);
    }
  };

  export const totalUser = (jwt) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/analytics/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+jwt
        },
        
      });
      const total = await res.json();
      console.log("total:- ",total)
      dispatch({ type: TOTAL_USER, payload: total });
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
      dispatch({ type: FIND_ALL_USER, payload: users });
    } catch (error) {
      console.log("catch error ", error);
    }
  };

  export const findUserByIdAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/users/${data.userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+data.jwt
        },
        
      });
      const user = await res.json();
      console.log("Find By Id :- ",user)
      dispatch({ type: FIND_USER_BY_USER_ID, payload: user });
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

  export const deleteUsersAction = (data) => async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/users/${data.userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+data.jwt
        },
        
      });
      const user = await res.json();
      console.log("Deleted User :- ",user)
      dispatch({ type: DELET_USER, payload: user });
    } catch (error) {
      console.log("catch error ", error);
    }
  };