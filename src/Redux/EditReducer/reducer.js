import { EDIT_FAILURE, EDIT_REQUEST, EDIT_SUCCESS, DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAILURE} from "./actionTypes";
  
  const initialState = {
    isLoading: false,
    isError: false,
    refresh: false,
    edit: [],
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case EDIT_REQUEST:
        return { ...state, isLoading: true };
      case EDIT_SUCCESS:
        return { ...state, isLoading: false, refresh: !state?.refresh };
      case EDIT_FAILURE:
        return { ...state, isLoading: false, isError: true };

        case DELETE_REQUEST:
        return { ...state, isLoading: true };
      case DELETE_SUCCESS:
        return { ...state, isLoading: false, refresh: !state?.refresh };
      case DELETE_FAILURE:
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };
  