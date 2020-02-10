import React, { useEffect } from "react";


import HomePage from "./components/HomePage"
import store from "./store"
import {getUsers} from "./js/actions/userActions"
import "./App.css";


 function App() {
    useEffect(()=> store.dispatch(getUsers() , []));

    return (
        <div>
            <HomePage /> 
        </div>
    )
}
export default App