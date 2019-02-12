import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Weather from "./components/weather/Weather";


class App extends Component {
  render() {
    return <div className="centerViewPort">
      <Weather />
    </div>;
  }
}

export default App;
