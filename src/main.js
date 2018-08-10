import React from "react";

import Appbar from "./appbar";
import Dos from "./dos";
import Intro from "./intro";
import Landing from "./landing";
import Recent from "./recent";
import Interests from "./interests";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <Appbar />
        <Landing />
        <Intro />
        <Dos />
        <Recent />
        <Interests />
      </div>
    );
  }
}
