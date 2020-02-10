import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import store from "./store";
import { getUsers } from "./js/actions/userActions";
import UserPhotos from "./components/UserPhotos";

import "./App.css";
import { getPhotos } from "./js/actions/PhotoActions";

function App() {
  useEffect(() =>{ store.dispatch(getUsers(), []) ;  store.dispatch(getPhotos(), [])   });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/gallery/:id" component={UserPhotos} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
