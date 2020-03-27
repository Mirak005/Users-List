import {
  GET_USERS,
  USERS_LOADING,
  EDIT_USER,
  ADD_USER,
  DELETE_USER
} from "../const/actionTypes";

const initState = {
  users: [],
  isLoading: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case USERS_LOADING:
    case EDIT_USER:
    case ADD_USER:
    case DELETE_USER:
      return { ...state, isLoading: true };
    case GET_USERS:
      return { ...state, users: action.payload, isLoading: false };
    default:
      return state;
  }
};
