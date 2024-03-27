import { Component } from "react";

import Home from "./components/Home";
import LoginRoute from "./components/LoginRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Home />
          <LoginRoute />
        </div>
      </div>
    );
  }
}

export default App;
