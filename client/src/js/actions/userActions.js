import axios from "axios";
import { USERS_LOADING, GET_USERS, EDIT_USER, ADD_USER, DELETE_USER } from "../const/actionTypes";

//get all users
export const getUsers = () => dispatch => {
  dispatch(setUsersLoading());
  axios
    .get("/api/user")
    .then(res => dispatch({ type: GET_USERS, payload: res.data }))
    .catch(err => console.log("get user Error "));
};
//add new user
export const addUser = newUser => dispatch => {
  dispatch({type :ADD_USER})
  axios
    .post("/api/user", newUser)
    .then(res => dispatch(getUsers()))
    .catch(err => console.log("err add new user "));
};
// delete user by id
export const deleteUser = id => dispatch => {
  dispatch({type :DELETE_USER})

  axios
    .delete(`/api/user/${id}`)
    .then(res => dispatch(getUsers()))
    .catch(err => console.log("err delete user"));
};

//edit user by id
export const editUser = (id, editedUser) => dispatch => {
  dispatch({ type: EDIT_USER });
  axios
    .put(`/api/user/${id}`, editedUser)
    .then(res => dispatch(getUsers()))
    .catch(err => console.log("edit error"));
};

// Users Loading
export const setUsersLoading = () => {
  return { type: USERS_LOADING };
};
