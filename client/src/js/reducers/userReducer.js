import { GET_USERS, USERS_LOADING } from "../const/actionTypes";

const initState = {
  users: [],
  isLoading: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case USERS_LOADING:
      return { ...state, isLoading: true };
    case GET_USERS :
      return { ...state, users: action.payload, isLoading: false };
      default :
      return state
  }
};
