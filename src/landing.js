import React from "react";
import Paper from "@material-ui/core/Paper";
import { KeyboardArrowDown } from "@material-ui/icons";
export default class Landing extends React.Component {
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
          height: "90vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 7,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <b style={{ fontSize: 50 }}>
            <p />Connecting the world.
          </b>
        </div>
        <div
          style={{
            display: "flex",
            flex: 3,
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <KeyboardArrowDown style={{ fontSize: 50 }} />
        </div>
      </Paper>
    );
  }
}
