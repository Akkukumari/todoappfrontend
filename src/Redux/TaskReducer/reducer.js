import {
  ADD_ERROR,
  ADD_REQUEST,
  ADD_SUCCESS,
  GET_REQUEST,
  GET_SUCCESS,
  GET_ERROR,
  ADD_TASK_DETAILS,
  ADD_TASK_FILTER,
} from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  taskDetails: {},
  refresh: false,
  filter: "",
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ADD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, payload],
        refresh: !state?.refresh,
      };
    }
    case ADD_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case GET_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: payload,
      };
    }
    case GET_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ADD_TASK_DETAILS: {
      return {
        ...state,
        taskDetails: payload,
      }
    }
    case ADD_TASK_FILTER: {
      return {
        ...state,
        filter: payload,
      }
    }
    default:
      return state;
  }
};
