import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/details/:name' component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
