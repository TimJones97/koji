/* eslint-disable */
import React, { Component } from "react";
import arrow_up from '../../static/img/general/arrow-up.svg';
import arrow_down from '../../static/img/general/arrow-down.svg';

class Arrow extends Component {
  render() {
    return (
      <a className="arrow nav-link" data-menuanchor={this.props.anchor} href={"# " + (this.props.anchor)}>
        <img src={this.props.down ? arrow_down : arrow_up} />
      </a>
    );
  }
}

export default Arrow;