import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./views/HomePage";
import UserPhotos from "./views/UserPhotos";
import store from "./store";
import { getPhotos } from "./js/actions/PhotoActions";
import { getUsers } from "./js/actions/userActions";

import "./App.css";

function App() {
  useEffect(() => {
    store.dispatch(getUsers(), []);
    store.dispatch(getPhotos(), []);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:userName/:id" component={UserPhotos} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
