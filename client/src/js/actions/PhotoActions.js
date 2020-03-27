import axios from "axios";
import { GET_PHOTOS, PHOTOS_LOADING, DELETE_PHOTO, ADD_PHOTO } from "../const/actionTypes";

//get All photos

export const getPhotos = () => dispatch => {
  dispatch(setPhotosLoading());
  axios
    .get("/api/photo")
    .then(res => dispatch({ type: GET_PHOTOS, payload: res.data }))
    .catch(err => console.log("error get photos"));
};

//delete photo
export const deletePhoto = id => dispatch => {
  dispatch({type : DELETE_PHOTO});

  axios
    .delete(`/api/photo/${id}`)
    .then(res => dispatch(getPhotos()))
    .catch(err => console.log("err delete photo"));
};
//add photo
export const addPhoto = (id, newPhoto) => dispatch => {
  dispatch({type:ADD_PHOTO});

  axios
    .post(`/api/photo/${id}`, newPhoto)
    .then(res => dispatch(getPhotos()))
    .catch(err => console.log("err add photo"));
};

// Photos Loading
export const setPhotosLoading = () => {
  return { type: PHOTOS_LOADING };
};
