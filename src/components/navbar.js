import React, { Component } from "react";
import Logo_light from '../../static/img/general/logo-light.svg';
import Logo_dark from '../../static/img/general/logo-dark.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className="light">
        <div className="container">
          <a className="logo" href="/koji/">
            <img className="light" src={Logo_light} />
            <img className="dark" src={Logo_dark} />
          </a>
          <div className="right-nav">
            <ul>
              <li className="nav-item">
                <a className="nav-link go-thesis" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/investments">Investments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/read">Read</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/listen">Listen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;