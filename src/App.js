import { Route, Switch } from "react-router-dom";
import { Component } from "react";

import Home from "./components/Home";
import LoginRoute from "./components/LoginRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
