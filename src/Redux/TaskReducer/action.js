import axios from "axios";
import { ADD_REQUEST, ADD_ERROR, ADD_SUCCESS, GET_REQUEST, GET_SUCCESS, GET_ERROR, ADD_TASK_DETAILS, ADD_TASK_FILTER } from "./actionTypes";

export const add = (todo) => (dispatch) => {
  dispatch({ type: ADD_REQUEST });
  axios
    .post("http://localhost:4500/todos", todo)
    .then((res) => {
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR });
    });
};

export const getTodo=()=>(dispatch)=>{
    dispatch({ type: GET_REQUEST });
    axios
      .get("http://localhost:4500/todos")
      .then((value) => {
        dispatch({ type:GET_SUCCESS, payload: value.data });
      })
      .catch((err) => {
        dispatch({ type:GET_ERROR });
      });
  };
  
export const addTaskDetails = (details) => (dispatch) => {
  dispatch({ type: ADD_TASK_DETAILS, payload:details });
}

export const addTaskFilter = (filter) => (dispatch) => {
  dispatch({ type: ADD_TASK_FILTER, payload:filter });
}