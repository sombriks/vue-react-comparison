// src/App.jsx
import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Settings from "./views/Settings.jsx";

import { Provider } from "react-redux";
import store from "./reducer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Menu />
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
