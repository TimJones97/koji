/* eslint-disable */
import React, { Component } from "react";

class Socials extends Component {
  render() {
    return (
      <div className={"socials " + (this.props.mobile ? 'mobile' : '')}>
        <p className="title">SOCIALS</p>
        <a href="#">AngelList</a>
        <a href="#">LinkedIn</a>
        <a href="#">Telegram</a>
        <a href="#">Twitter</a>
      </div>
    );
  }
}

export default Socials;