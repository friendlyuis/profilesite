import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.calcDate("05/10/2016", Date.now()),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calcDate(d1, d2) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let dd = Math.floor(
      (Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) -
        Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) /
        (1000 * 60 * 60 * 24)
    );

    this.setState({ date: dd });
  }
  render() {
    return (
      <Paper
        elevation={0}
        square={true}
        style={{
          backgroundColor: "orange",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: 250,
            marginBottom: 250
          }}
        >
          <Typography
            variant="subheading"
            style={{ display: "flex", fontSize: 28 }}
          >
            <b>Hi, I'm Tommy. Nice to meet you.</b>
          </Typography>
          <Typography
            variant="body2"
            style={{
              display: "flex",
              fontSize: 18,
              maxWidth: 540,
              marginLeft: 20,
              marginRight: 20
            }}
          >
            I embarked upon my journey as freelance full-stack developer exactly{" "}
            {this.state.date} days ago. While my time as a freelancer has been
            short, I have been interested and have developed applications well
            before my official entry into the field. I’m a curious soul, who is
            always striving to learn the latest technologies. I specialise in
            creating business and industrial applications.
          </Typography>
        </div>
      </Paper>
    );
  }
}
