import React, { Component } from "react";

class LogoutComponent extends Component {
  componentDidMount() {
    if (window.localStorage.getItem("username")) {
      window.localStorage.clear();
      alert("You have been logged out succesfully !");
      this.props.history.push("/");
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    return <></>;
  }
}

export default LogoutComponent;
