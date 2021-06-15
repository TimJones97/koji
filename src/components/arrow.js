/* eslint-disable */
import React, { Component } from "react";

// White arrow
import arrow_up_white from '../../static/img/general/arrow-up_white.svg';
import arrow_down_white from '../../static/img/general/arrow-down_white.svg';

// Orange arrow
import arrow_up_orange from '../../static/img/general/arrow-up_orange.svg';
import arrow_down_orange from '../../static/img/general/arrow-down_orange.svg';

// Black arrow
import arrow_down_black from '../../static/img/general/arrow-down_black.svg';

class Arrow extends Component {
  render() {
    return (
      <a className={'arrow nav-link ' + (this.props.up ? 'up ' : '') + this.props.type} data-menuanchor={this.props.anchor} href={'#' + (this.props.anchor)}>
        <img className='white' src={this.props.down ? arrow_down_white : arrow_up_white} />
        <img className='orange' src={this.props.down ? arrow_down_orange : arrow_up_orange} />
        {/*There is no arrow up white/black combo, only for down*/}
        {this.props.down &&
          <img className='black' src={arrow_down_black} />
        }
      </a>
    );
  }
}

export default Arrow;