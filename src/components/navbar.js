/* eslint-disable */
import React, { Component } from "react";
import { Link } from "gatsby"

// Icon assets
import logo_light from '../../static/img/general/logo-light.svg';
import logo_dark from '../../static/img/general/logo-dark.svg';
import close_btn from '../../static/img/general/close.svg';
import discourse_icon from '../../static/img/social-icons/discourse.svg';
import github_icon from '../../static/img/social-icons/github.svg';
import discord_icon from '../../static/img/social-icons/discord.svg';
import twitter_icon from '../../static/img/social-icons/twitter.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className={this.props.background}>
        <div className="container">
          <a className="logo" href={(this.props.home ? "#go-home" : "/")}>
            <img className="light" src={logo_light} />
            <img className="dark" src={logo_dark} />
          </a>
          <div className="right-nav">
            <ul>
              <li className="nav-item">
                <a className="nav-link go-thesis" href="/">About</a>
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
          <a className="menu-toggle">
            <button className="nav-btn">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </a>
        </div>
        <menu className="mobile-nav">
          <span className="menu-text">Menu</span>
          <a className="close-btn">
            <img src={close_btn}/>
          </a>
          <div className="mobile-nav__items">
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
              <li className="nav-item">
              </li>
            </ul>
            <div className="mobile-socials">
              <a className="social-link" href="#">
                <picture>
                  <img src={discourse_icon}/>
                </picture>
              </a>
              <a className="social-link" href="#">
                <picture>
                  <img src={github_icon}/>
                </picture>
              </a>
              <a className="social-link" href="#">
                <picture>
                  <img src={discord_icon}/>
                </picture>
              </a>
              <a className="social-link" href="#">
                <picture>
                  <img src={twitter_icon}/>
                </picture>
              </a>
            </div>
          </div>
        </menu>
      </nav>
    );
  }
}

export default Navbar;