import axios from "axios";
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";

export const login = (userData) => (dispatch) => {
  // Complete login logic here
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("http://localhost:4500/users/login", userData)
    .then((res) => {
      console.log( res.data.token);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(() => {
      dispatch({ type: LOGIN_FAILURE });
    });
};