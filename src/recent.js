import React from "react";
import Paper from "@material-ui/core/Paper";

export default class Recent extends React.Component {
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
          backgroundColor: "orange",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          height: 300,
          marginTop: 20
        }}
      >
        <b>Recent Projects</b>
      </Paper>
    );
  }
}
