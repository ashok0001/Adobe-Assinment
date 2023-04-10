import { BASE_URL } from "../../Config/API";
import { CREATE_USER } from "./ActionType";


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
      dispatch({ type: CREATE_USER, payload: user });
    } catch (error) {
      console.log("catch error ", error);
    }
  };