import { combineReducers } from "redux"
import userReducer from "./userReducer"
import photoReducer from "./photoReducer"



export default combineReducers({
 users : userReducer ,
 photos : photoReducer

})