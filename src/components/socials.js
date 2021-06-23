import React, { Component } from "react";

class Socials extends Component {
  render() {
    return (
      <div className={"socials " + (this.props.mobileSml ? 'mobile-sml' : '')}>
        <p className="title">SOCIALS</p>
        {/*<a href="#empty">AngelList</a>*/}
        <a href="https://linkedin.com/company/koji-capital/about/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://t.me/david_kji" target="_blank" rel="noreferrer">Telegram</a>
        <a href="https://twitter.com/koji_capital" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    );
  }
}

export default Socials;