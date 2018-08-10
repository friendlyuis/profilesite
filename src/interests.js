import React from "react";
import Paper from "@material-ui/core/Paper";

export default class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper
        elevation={0}
        square={true}
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          height: 300,
          marginTop: 20
        }}
      >
        <b>Interests</b>
      </Paper>
    );
  }
}
