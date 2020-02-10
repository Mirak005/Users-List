import { GET_PHOTOS, PHOTOS_LOADING } from "../const/actionTypes";

const initState = {
  photos: [],
  isLoading: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case PHOTOS_LOADING:
      return { ...state, isLoading: true };
    case GET_PHOTOS :
      return { ...state, photos: action.payload, isLoading: false };
      default :
      return state
  }
};
